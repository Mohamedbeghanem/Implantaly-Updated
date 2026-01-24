import { NextResponse } from "next/server"
import { resolveDataset } from "@/src/sanity/lib/dataset"

export const runtime = "nodejs"

export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ ok: false }, { status: 404 })
  }

  return NextResponse.json({
    ok: true,
    dataset: resolveDataset({ explicitDataset: process.env.SANITY_DATASET }),
    projectId: process.env.SANITY_PROJECT_ID ?? null,
  })
}
