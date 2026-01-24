import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

// Reuse your Sanity env vars / dataset resolver
const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  apiVersion: "2024-01-01",
  token: process.env.SANITY_TOKEN!, // server-only
  useCdn: false,
});

function escapeCsv(value: unknown) {
  if (value === null || value === undefined) return "";
  const s = String(value).replace(/\r?\n|\r/g, " "); // flatten new lines
  // Quote if it contains comma, quote, or newline
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function toCsv(rows: Record<string, any>[], columns: string[]) {
  const header = columns.map(escapeCsv).join(",");
  const lines = rows.map((r) => columns.map((c) => escapeCsv(r?.[c])).join(","));
  return [header, ...lines].join("\n");
}

export async function GET(req: Request) {
  try {
    // ✅ protect endpoint
    const secret = process.env.EXPORT_SECRET;
    const auth = req.headers.get("authorization") || "";
    const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";

    if (!secret || token !== secret) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type") || "formSubmission"; // or registrationSubmission
    const limit = Math.min(Number(searchParams.get("limit") || "5000"), 20000);

    if (!["formSubmission", "registrationSubmission"].includes(type)) {
      return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }

    const query =
      type === "formSubmission"
        ? `*[_type=="formSubmission"] | order(_createdAt desc)[0...$limit]{
            _id,
            createdAt,
            name,
            email,
            phone,
            message,
            formId,
            pagePath,
            source,
            userAgent
          }`
        : `*[_type=="registrationSubmission"] | order(_createdAt desc)[0...$limit]{
            _id,
            createdAt,
            name,
            email,
            phone,
            message,
            profession,
            interests,
            experienceLevel,
            formId,
            pagePath,
            source,
            userAgent
          }`;

    const data: any[] = await client.fetch(query, { limit });

    // Normalize arrays for CSV
    const rows = data.map((r) => ({
      ...r,
      interests: Array.isArray(r.interests) ? r.interests.join(" | ") : r.interests,
    }));

    const columns =
      type === "formSubmission"
        ? ["_id", "createdAt", "name", "email", "phone", "message", "formId", "pagePath", "source", "userAgent"]
        : ["_id", "createdAt", "name", "email", "phone", "profession", "interests", "experienceLevel", "message", "formId", "pagePath", "source", "userAgent"];

    const csv = toCsv(rows, columns);

    const filename = `${type}-${new Date().toISOString().slice(0, 10)}.csv`;

    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err: any) {
    console.error("CSV export error:", err);
    return NextResponse.json({ error: "Server error", details: String(err?.message || err) }, { status: 500 });
  }
}
