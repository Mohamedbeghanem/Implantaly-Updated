import ContactUs2 from "@/components/mvpblocks/contact-us-2"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)_/_0.05)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)_/_0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-24 left-16 h-72 w-72 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent shadow-sm">
              Alta Academy
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Talk with our dental education team
            </h1>
            <p className="max-w-xl text-lg text-muted">
              Ready to level up your clinical skills? Reach out for program details, admissions
              guidance, and answers from the people who build our curriculum.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-border bg-surface/70 px-4 py-2 text-sm text-foreground shadow-sm">
                Admissions support
              </span>
              <span className="rounded-full border border-border bg-surface/70 px-4 py-2 text-sm text-foreground shadow-sm">
                Program planning
              </span>
              <span className="rounded-full border border-border bg-surface/70 px-4 py-2 text-sm text-foreground shadow-sm">
                Student success
              </span>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-surface/80 p-8 shadow-sm backdrop-blur">
            <h2 className="text-xl font-semibold text-foreground">Contact highlights</h2>
            <p className="mt-2 text-sm text-muted">
              Tell us where you are in your dental journey and we will connect you with the
              right advisor.
            </p>
            <dl className="mt-6 space-y-4 text-sm">
              <div className="flex items-start justify-between gap-6">
                <dt className="text-muted">Response time</dt>
                <dd className="text-right font-semibold text-foreground">Within 1 business day</dd>
              </div>
              <div className="flex items-start justify-between gap-6">
                <dt className="text-muted">Office hours</dt>
                <dd className="text-right font-semibold text-foreground">Mon-Fri, 9am-6pm</dd>
              </div>
              <div className="flex items-start justify-between gap-6">
                <dt className="text-muted">Preferred contact</dt>
                <dd className="text-right font-semibold text-foreground">Email or phone</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)_/_0.08),_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContactUs2 />
        </div>
      </section>
      <Footer />
    </main>
  )
}
