export type SanityDataset = "production" | "staging"

const VALID_DATASETS: SanityDataset[] = ["production", "staging"]

function normalizeDataset(value?: string | null): SanityDataset | null {
  if (!value) return null
  return VALID_DATASETS.includes(value as SanityDataset)
    ? (value as SanityDataset)
    : null
}

export function resolveDataset(options?: {
  vercelEnv?: string
  nodeEnv?: string
  explicitDataset?: string
}): SanityDataset {
  const vercelEnv = options?.vercelEnv ?? process.env.VERCEL_ENV
  const nodeEnv = options?.nodeEnv ?? process.env.NODE_ENV
  const explicitDataset = normalizeDataset(options?.explicitDataset)

  if (vercelEnv === "production") return "production"
  if (vercelEnv === "preview" || vercelEnv === "development") return "staging"
  if (nodeEnv === "development" || nodeEnv === "test") return "staging"

  return explicitDataset ?? "production"
}
