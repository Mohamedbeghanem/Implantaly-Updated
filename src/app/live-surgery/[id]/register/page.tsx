import { liveSurgerySessions } from "@/lib/liveSurgery"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function LiveSurgeryRegisterPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const liveSurgery = liveSurgerySessions.find((session) => session.id === id)

  if (!liveSurgery) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="py-12 md:py-24 lg:py-28">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 sm:p-8">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.35em] text-emerald-500">Register</p>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {liveSurgery.title}
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Secure your seat for the live surgery session with our team.
                </p>
              </div>
              <form className="mt-8 grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                  Full name
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Dr. Ahmed Ben"
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:focus:ring-emerald-900"
                    required
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="doctor@email.com"
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:focus:ring-emerald-900"
                    required
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+213 6xx xxx xxx"
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:focus:ring-emerald-900"
                    required
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                  Specialty
                  <input
                    type="text"
                    name="specialty"
                    placeholder="Implantology"
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:focus:ring-emerald-900"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-gray-700 dark:text-gray-200 sm:col-span-2">
                  Notes
                  <textarea
                    name="notes"
                    rows={4}
                    placeholder="Tell us about your goals or questions."
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:focus:ring-emerald-900"
                  />
                </label>
                <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    By submitting, you agree to be contacted about this session.
                  </p>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Submit Registration
                  </Button>
                </div>
              </form>
            </div>

            <aside className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <div>
                <h2 className="text-lg font-semibold">Session details</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Review the essentials before registering.
                </p>
              </div>
              <div className="space-y-4 text-sm text-gray-700 dark:text-gray-200">
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Surgeon</div>
                  <div className="font-medium">{liveSurgery.surgeon}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Date</div>
                  <div className="font-medium">{liveSurgery.date}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Duration</div>
                  <div className="font-medium">{liveSurgery.duration}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Location</div>
                  <div className="font-medium">{liveSurgery.location}</div>
                </div>
                {liveSurgery.procedureType && (
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Procedure</div>
                    <div className="font-medium">{liveSurgery.procedureType}</div>
                  </div>
                )}
              </div>
              <div className="border-t border-gray-200 pt-4 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
                Need more info?{" "}
                <Link href="/contact" className="font-medium text-emerald-500 hover:text-emerald-600">
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
