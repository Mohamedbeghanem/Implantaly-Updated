import { NextResponse } from "next/server"
import { createClient } from "@sanity/client"
import { resolveDataset } from "@/src/sanity/lib/dataset"

export const runtime = "nodejs"

type SubmissionType = "formSubmission" | "registrationSubmission"

type BasePayload = {
  formId: string
  name: string
  email: string
  phone?: string
  message?: string
  pagePath?: string
  source?: string
  userAgent?: string
  ip?: string
  company?: string
}

type RegistrationPayload = BasePayload & {
  profession?: string
  interests?: string[]
  experienceLevel?: "beginner" | "intermediate" | "advanced"
}

type SubmissionRequest = {
  type: SubmissionType
  data: Record<string, unknown>
}

type RateLimitEntry = { count: number; resetAt: number }

const rateLimitWindowMs = 60_000
const rateLimitMax = 10

const rateLimitStore: Map<string, RateLimitEntry> =
  (globalThis as { __formRateLimit?: Map<string, RateLimitEntry> })
    .__formRateLimit ?? new Map()

;(globalThis as { __formRateLimit?: Map<string, RateLimitEntry> }).__formRateLimit =
  rateLimitStore

const isProduction = process.env.NODE_ENV === "production"

function getClient() {
  const projectId = process.env.SANITY_PROJECT_ID
  const token = process.env.SANITY_TOKEN
  const dataset = resolveDataset({
    explicitDataset: process.env.SANITY_DATASET,
  })

  if (!projectId) {
    throw new Error("Missing SANITY_PROJECT_ID")
  }
  if (!token) {
    throw new Error("Missing SANITY_TOKEN")
  }

  return createClient({
    projectId,
    dataset,
    apiVersion: "2026-01-23",
    token,
    useCdn: false,
  })
}

function getRequestIp(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for")
  if (forwarded) {
    return forwarded.split(",")[0]?.trim()
  }
  return req.headers.get("x-real-ip") || undefined
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0
}

function toOptionalString(value: unknown) {
  return typeof value === "string" && value.trim().length > 0
    ? value.trim()
    : undefined
}

function toStringArray(value: unknown): string[] | undefined {
  if (!Array.isArray(value)) return undefined
  const cleaned = value.filter((item) => typeof item === "string") as string[]
  return cleaned.length ? cleaned : undefined
}

function validateFormSubmission(data: Record<string, unknown>): BasePayload | null {
  if (!isNonEmptyString(data.formId)) return null
  if (!isNonEmptyString(data.name)) return null
  if (!isNonEmptyString(data.email)) return null
  if (!isNonEmptyString(data.message)) return null

  return {
    formId: data.formId.trim(),
    name: data.name.trim(),
    email: data.email.trim(),
    message: data.message.trim(),
    phone: toOptionalString(data.phone),
    pagePath: toOptionalString(data.pagePath),
    source: toOptionalString(data.source),
    userAgent: toOptionalString(data.userAgent),
    ip: toOptionalString(data.ip),
    company: toOptionalString(data.company),
  }
}

function validateRegistrationSubmission(
  data: Record<string, unknown>
): RegistrationPayload | null {
  if (!isNonEmptyString(data.formId)) return null
  if (!isNonEmptyString(data.name)) return null
  if (!isNonEmptyString(data.email)) return null
  if (!isNonEmptyString(data.phone)) return null
  if (!isNonEmptyString(data.experienceLevel)) return null

  const experienceLevel = data.experienceLevel;

if (experienceLevel !== "beginner" && experienceLevel !== "intermediate" && experienceLevel !== "advanced") {
  return null;
}


  return {
    formId: data.formId.trim(),
    name: data.name.trim(),
    email: data.email.trim(),
    phone: data.phone.trim(),
    experienceLevel,
    profession: toOptionalString(data.profession),
    interests: toStringArray(data.interests),
    message: toOptionalString(data.message),
    pagePath: toOptionalString(data.pagePath),
    source: toOptionalString(data.source),
    userAgent: toOptionalString(data.userAgent),
    ip: toOptionalString(data.ip),
    company: toOptionalString(data.company),
  }
}

function applyRateLimit(ip: string | undefined) {
  if (!ip) return null
  const now = Date.now()
  const existing = rateLimitStore.get(ip)
  if (!existing || existing.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + rateLimitWindowMs })
    return null
  }
  if (existing.count >= rateLimitMax) {
    return Math.max(0, existing.resetAt - now)
  }
  existing.count += 1
  return null
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as SubmissionRequest
    if (!body || typeof body !== "object" || !body.data || typeof body.data !== "object") {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 })
    }

    const ip = getRequestIp(req)

    if (!isProduction) {
      const waitMs = applyRateLimit(ip)
      if (waitMs !== null) {
        return NextResponse.json(
          { error: "Too many submissions. Try again soon." },
          { status: 429 }
        )
      }
    }

    if (body.type !== "formSubmission" && body.type !== "registrationSubmission") {
      return NextResponse.json({ error: "Invalid submission type" }, { status: 400 })
    }

    const resolvedUserAgent =
      req.headers.get("user-agent") || toOptionalString(body.data.userAgent)

    const baseFields = {
      pagePath: toOptionalString(body.data.pagePath),
      source: toOptionalString(body.data.source),
      userAgent: resolvedUserAgent,
      ip,
      company: toOptionalString(body.data.company),
    }

    const payload =
      body.type === "formSubmission"
        ? validateFormSubmission({ ...body.data, ...baseFields })
        : validateRegistrationSubmission({ ...body.data, ...baseFields })

    if (!payload) {
      return NextResponse.json(
        { error: "Missing or invalid required fields" },
        { status: 400 }
      )
    }

    if (payload.company) {
      return NextResponse.json({ ok: true, skipped: true })
    }

    const sanity = getClient()
    const { company: _company, ...sanitized } = payload

    const created = await sanity.create({
      _type: body.type,
      ...sanitized,
      userAgent: resolvedUserAgent,
      ip,
      createdAt: new Date().toISOString(),
    })

    return NextResponse.json({ ok: true, id: created?._id })
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected server error"
    console.error("Sanity submission error:", error)
    return NextResponse.json(
      { error: "Server error", details: message },
      { status: 500 }
    )
  }
}
