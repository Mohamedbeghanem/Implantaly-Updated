import { dentalCourses } from "@/lib/workshops"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
              <form className="mt-8 grid gap-4 sm:grid-cols-2">
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
                  Notes
                  <textarea
                    name="notes"
                    rows={4}
                    placeholder="Tell us about your goals or questions."
                    className="w-full rounded-lg border border-border bg-surface px-4 py-2 text-sm text-foreground shadow-sm focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  />
                </label>
                <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-muted">
                    By submitting, you agree to be contacted about this workshop.
                  </p>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Submit Registration
                  </Button>
                </div>
              </form>
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
