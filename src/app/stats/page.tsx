"use client"

import { AltaAcademyStats } from "@/components/alta-academy-stats"
import { useTranslations } from "@/hooks/use-translations"

export default function StatsPage() {
  const { t } = useTranslations()
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-neutral-50 via-white to-neutral-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-600 bg-clip-text text-transparent">
              {t("statsPage.title")}
            </span>
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            {t("statsPage.subtitle")}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <AltaAcademyStats />
    </main>
  )
}
