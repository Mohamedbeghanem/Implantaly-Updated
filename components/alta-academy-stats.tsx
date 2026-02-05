"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle, HeartPulse, ShieldCheck, Smile, Stethoscope, Sparkles } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"

export function AltaAcademyStats() {
  const { t } = useTranslations()
  const stats = [
    {
      icon: Stethoscope,
      value: t("statsPage.items.0.value"),
      label: t("statsPage.items.0.label"),
      description: t("statsPage.items.0.description"),
      gradient: "from-primary to-primary"
    },
    {
      icon: Sparkles,
      value: t("statsPage.items.1.value"),
      label: t("statsPage.items.1.label"),
      description: t("statsPage.items.1.description"),
      gradient: "from-accent to-accent"
    },
    {
      icon: ShieldCheck,
      value: t("statsPage.items.2.value"),
      label: t("statsPage.items.2.label"),
      description: t("statsPage.items.2.description"),
      gradient: "from-accent to-accent"
    },
    {
      icon: HeartPulse,
      value: t("statsPage.items.3.value"),
      label: t("statsPage.items.3.label"),
      description: t("statsPage.items.3.description"),
      gradient: "from-accent to-accent"
    },
    {
      icon: Smile,
      value: t("statsPage.items.4.value"),
      label: t("statsPage.items.4.label"),
      description: t("statsPage.items.4.description"),
      gradient: "from-primary to-primary"
    },
    {
      icon: CheckCircle,
      value: t("statsPage.items.5.value"),
      label: t("statsPage.items.5.label"),
      description: t("statsPage.items.5.description"),
      gradient: "from-primary to-primary"
    }
  ]

  return (
    <section className="relative w-full bg-background py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-neutral-900/15 rounded-full mix-blend-multiply blur-3xl opacity-60 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neutral-800/15 rounded-full mix-blend-multiply blur-3xl opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">
              {t("statsPage.title")}
            </span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            {t("statsPage.subtitle")}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="group text-center p-8 bg-surface/80 backdrop-blur-xl border border-border rounded-3xl hover:bg-surface transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-all duration-500 shadow-sm`}>
                <stat.icon className="w-8 h-8 text-primaryForeground" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {stat.value}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {stat.label}
              </h3>
              <p className="text-muted leading-relaxed">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-surface/80 backdrop-blur-xl rounded-2xl border border-border">
            <HeartPulse className="w-6 h-6 text-primary mr-3" />
            <span className="text-muted text-lg">
              {t("statsPage.cta")}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
