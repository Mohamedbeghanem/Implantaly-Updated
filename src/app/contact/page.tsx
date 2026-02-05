"use client"

import ContactUs2 from "@/components/mvpblocks/contact-us-2"
import { Footer } from "@/components/footer"
import { useTranslations } from "@/hooks/use-translations"

export default function ContactPage() {
  const { t } = useTranslations()
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)_/_0.05)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)_/_0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-24 left-16 h-72 w-72 rounded-full bg-gradient-to-r from-neutral-900/10 to-neutral-700/10 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-gradient-to-r from-neutral-900/10 to-neutral-700/10 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent shadow-sm">
              {t("contactPage.badge")}
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {t("contactPage.title")}
            </h1>
            <p className="max-w-xl text-lg text-muted">
              {t("contactPage.subtitle")}
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-border bg-surface/70 px-4 py-2 text-sm text-foreground shadow-sm">
                {t("contactPage.tags.0")}
              </span>
              <span className="rounded-full border border-border bg-surface/70 px-4 py-2 text-sm text-foreground shadow-sm">
                {t("contactPage.tags.1")}
              </span>
              <span className="rounded-full border border-border bg-surface/70 px-4 py-2 text-sm text-foreground shadow-sm">
                {t("contactPage.tags.2")}
              </span>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-surface/80 p-8 shadow-sm backdrop-blur">
            <h2 className="text-xl font-semibold text-foreground">Contact highlights</h2>
            <p className="mt-2 text-sm text-muted">
              {t("contactPage.highlights.subtitle")}
            </p>
            <dl className="mt-6 space-y-4 text-sm">
              <div className="flex items-start justify-between gap-6">
                <dt className="text-muted">{t("contactPage.highlights.items.0.label")}</dt>
                <dd className="text-right font-semibold text-foreground">{t("contactPage.highlights.items.0.value")}</dd>
              </div>
              <div className="flex items-start justify-between gap-6">
                <dt className="text-muted">{t("contactPage.highlights.items.1.label")}</dt>
                <dd className="text-right font-semibold text-foreground">{t("contactPage.highlights.items.1.value")}</dd>
              </div>
              <div className="flex items-start justify-between gap-6">
                <dt className="text-muted">{t("contactPage.highlights.items.2.label")}</dt>
                <dd className="text-right font-semibold text-foreground">{t("contactPage.highlights.items.2.value")}</dd>
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
