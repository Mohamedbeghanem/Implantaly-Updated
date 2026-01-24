import { resolveDataset } from "./lib/dataset"

export const apiVersion = "2026-01-23"

export const dataset = resolveDataset({
  explicitDataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
})

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
