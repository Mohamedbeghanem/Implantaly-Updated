import { useCallback, useState } from "react"

type SubmissionType = "formSubmission" | "registrationSubmission"

type SubmitArgs = {
  type: SubmissionType
  data: Record<string, unknown>
}

type SubmitState = "idle" | "loading" | "success" | "error"

export function useFormSubmit() {
  const [status, setStatus] = useState<SubmitState>("idle")
  const [error, setError] = useState<string | null>(null)
  const [id, setId] = useState<string | null>(null)

  const submit = useCallback(async ({ type, data }: SubmitArgs) => {
    setStatus("loading")
    setError(null)
    setId(null)

    try {
      const response = await fetch("/api/form-submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, data }),
      })

      const payload = (await response.json().catch(() => ({}))) as {
        ok?: boolean
        id?: string
        error?: string
      }

      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || "Submission failed")
      }

      setStatus("success")
      setId(payload.id ?? null)
      return true
    } catch (err) {
      const message = err instanceof Error ? err.message : "Submission failed"
      setError(message)
      setStatus("error")
      return false
    }
  }, [])

  const reset = useCallback(() => {
    setStatus("idle")
    setError(null)
    setId(null)
  }, [])

  return {
    submit,
    reset,
    status,
    error,
    id,
    isLoading: status === "loading",
    isSuccess: status === "success",
    isError: status === "error",
  }
}
