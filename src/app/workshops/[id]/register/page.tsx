import { dentalCourses } from "@/lib/workshops"
import { notFound } from "next/navigation"
import Link from "next/link"
import { SessionRegistrationForm } from "@/components/forms/SessionRegistrationForm"

export default async function WorkshopRegisterPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const workshop = dentalCourses.find((session) => session.id === id)

  if (!workshop) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="py-12 md:py-24 lg:py-28">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.35em] text-accent">Register</p>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {workshop.title}
                </h1>
                <p className="text-sm text-muted">
                  Secure your seat for this hands-on workshop.
                </p>
              </div>
              <SessionRegistrationForm
                formId="workshop-registration"
                sessionTitle={workshop.title}
                disclaimer="By submitting, you agree to be contacted about this workshop."
              />
            </div>

            <aside className="space-y-6 rounded-2xl border border-border bg-surface p-6 shadow-sm">
              <div>
                <h2 className="text-lg font-semibold">Workshop details</h2>
                <p className="text-sm text-muted">
                  Review the essentials before registering.
                </p>
              </div>
              <div className="space-y-4 text-sm text-foreground">
                <div>
                  <div className="text-xs text-muted">Surgeon</div>
                  <div className="font-medium">{workshop.surgeon}</div>
                </div>
                <div>
                  <div className="text-xs text-muted">Date</div>
                  <div className="font-medium">{workshop.date}</div>
                </div>
                <div>
                  <div className="text-xs text-muted">Duration</div>
                  <div className="font-medium">{workshop.duration}</div>
                </div>
                <div>
                  <div className="text-xs text-muted">Location</div>
                  <div className="font-medium">{workshop.location}</div>
                </div>
                <div>
                  <div className="text-xs text-muted">Category</div>
                  <div className="font-medium">{workshop.category}</div>
                </div>
              </div>
              <div className="border-t border-border pt-4 text-sm text-muted">
                Need more info?{" "}
                <Link href="/contact" className="font-medium text-accent hover:text-accent/80">
                  Contact our team
                </Link>
                .
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
