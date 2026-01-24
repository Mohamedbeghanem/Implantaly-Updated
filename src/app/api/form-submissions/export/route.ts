import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

export const runtime = "nodejs";
export const dynamic = "force-dynamic"; // prevent static analysis/caching

function getSanityClient() {
  const projectId = process.env.SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET;
  const token = process.env.SANITY_TOKEN;

  if (!projectId || !dataset || !token) {
    throw new Error(
      `Missing Sanity env vars: ` +
        `${!projectId ? "SANITY_PROJECT_ID " : ""}` +
        `${!dataset ? "SANITY_DATASET " : ""}` +
        `${!token ? "SANITY_TOKEN" : ""}`
    );
  }

  return createClient({
    projectId,
    dataset,
    apiVersion: "2024-01-01",
    token,
    useCdn: false,
  });
}

// ... keep your escapeCsv/toCsv helpers

export async function GET(req: Request) {
  try {
    // ✅ protect endpoint
    const secret = process.env.EXPORT_SECRET;
    const auth = req.headers.get("authorization") || "";
    const bearer = auth.startsWith("Bearer ") ? auth.slice(7) : "";

    if (!secret || bearer !== secret) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const client = getSanityClient(); // ✅ create here, not at module load

    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type") || "formSubmission";
    const limit = Math.min(Number(searchParams.get("limit") || "5000"), 20000);

    if (type !== "formSubmission" && type !== "registrationSubmission") {
      return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }

    // ... keep your GROQ + CSV generation
    // const data = await client.fetch(...)
    // return new NextResponse(csv, { headers: ... })

  } catch (err: any) {
    console.error("CSV export error:", err);
    return NextResponse.json(
      { error: "Server error", details: String(err?.message || err) },
      { status: 500 }
    );
  }
}
