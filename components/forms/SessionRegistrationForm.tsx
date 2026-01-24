"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useFormSubmit } from "@/src/hooks/useFormSubmit"

const EXPERIENCE_OPTIONS = [
  { label: "Beginner", value: "beginner" },
  { label: "Intermediate", value: "intermediate" },
  { label: "Advanced", value: "advanced" },
] as const

type ExperienceLevel = (typeof EXPERIENCE_OPTIONS)[number]["value"]

type SessionRegistrationFormProps = {
  formId: string
  sessionTitle: string
  disclaimer: string
}

export function SessionRegistrationForm({
  formId,
  sessionTitle,
  disclaimer,
}: SessionRegistrationFormProps) {
  const pathname = usePathname()
  const { submit, isLoading, isSuccess, isError, error } = useFormSubmit()
  const [experienceLevel, setExperienceLevel] =
    React.useState<ExperienceLevel>("beginner")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const ok = await submit({
      type: "registrationSubmission",
      data: {
        formId,
        name: String(formData.get("fullName") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        phone: String(formData.get("phone") || "").trim(),
        profession: String(formData.get("specialty") || "").trim(),
        message: String(formData.get("notes") || "").trim(),
        interests: [sessionTitle],
        experienceLevel,
        pagePath: pathname,
        source: "website",
        company: String(formData.get("company") || "").trim(),
      },
    })

    if (ok) {
      form.reset()
      setExperienceLevel("beginner")
    }
  }

  return (
    <form className="mt-8 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <label className="grid gap-2 text-sm font-medium text-foreground">
        Full name
        <input
          type="text"
          name="fullName"
          placeholder="Dr. Ahmed Ben"
          className="w-full rounded-lg border border-border bg-surface px-4 py-2 text-sm text-foreground shadow-sm focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          required
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-foreground">
        Email
        <input
          type="email"
          name="email"
          placeholder="doctor@email.com"
          className="w-full rounded-lg border border-border bg-surface px-4 py-2 text-sm text-foreground shadow-sm focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          required
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-foreground">
        Phone
        <input
          type="tel"
          name="phone"
          placeholder="+213 6xx xxx xxx"
          className="w-full rounded-lg border border-border bg-surface px-4 py-2 text-sm text-foreground shadow-sm focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          required
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-foreground">
        Specialty
        <input
          type="text"
          name="specialty"
          placeholder="Implantology"
          className="w-full rounded-lg border border-border bg-surface px-4 py-2 text-sm text-foreground shadow-sm focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-foreground sm:col-span-2">
        Experience level
        <select
          name="experienceLevel"
          value={experienceLevel}
          onChange={(event) => setExperienceLevel(event.target.value as ExperienceLevel)}
          className="w-full rounded-lg border border-border bg-surface px-4 py-2 text-sm text-foreground shadow-sm focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          required
        >
          {EXPERIENCE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-medium text-foreground sm:col-span-2">
        Notes
        <textarea
          name="notes"
          rows={4}
          placeholder="Tell us about your goals or questions."
          className="w-full rounded-lg border border-border bg-surface px-4 py-2 text-sm text-foreground shadow-sm focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        />
      </label>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">{disclaimer}</p>
        <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit Registration"}
        </Button>
      </div>
      {isSuccess ? (
        <p className="text-sm text-foreground sm:col-span-2">
          Thanks! Your registration has been received.
        </p>
      ) : null}
      {isError ? (
        <p className="text-sm text-destructive sm:col-span-2">{error}</p>
      ) : null}
    </form>
  )
}
