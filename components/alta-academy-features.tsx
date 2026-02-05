"use client"

import { Card } from "@/components/ui/card"
import { Stethoscope, Sparkles, Shield, HeartPulse, Camera, Smile, Star } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"

export function AltaAcademyFeatures() {
  const { t } = useTranslations()
  const features = [
    {
      icon: Stethoscope,
      title: t("servicesPage.features.0.title"),
      description: t("servicesPage.features.0.description"),
      gradient: "from-neutral-700 to-neutral-900"
    },
    {
      icon: Sparkles,
      title: t("servicesPage.features.1.title"),
      description: t("servicesPage.features.1.description"),
      gradient: "from-neutral-700 to-neutral-900"
    },
    {
      icon: Smile,
      title: t("servicesPage.features.2.title"),
      description: t("servicesPage.features.2.description"),
      gradient: "from-neutral-700 to-neutral-900"
    },
    {
      icon: Camera,
      title: t("servicesPage.features.3.title"),
      description: t("servicesPage.features.3.description"),
      gradient: "from-neutral-600 to-neutral-800"
    },
    {
      icon: HeartPulse,
      title: t("servicesPage.features.4.title"),
      description: t("servicesPage.features.4.description"),
      gradient: "from-neutral-500 to-neutral-700"
    },
    {
      icon: Shield,
      title: t("servicesPage.features.5.title"),
      description: t("servicesPage.features.5.description"),
      gradient: "from-neutral-700 to-neutral-900"
    }
  ]

  return (
    <section className="relative w-full bg-gradient-to-br from-neutral-50 via-white to-neutral-100 py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-neutral-400/15 to-neutral-600/15 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-neutral-500/15 to-neutral-700/15 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-600 bg-clip-text text-transparent">
              {t("servicesPage.title")}
            </span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            {t("servicesPage.subtitle")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group text-center p-8 bg-white/80 backdrop-blur-xl border border-border rounded-3xl hover:bg-white transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-neutral-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-surface/80 backdrop-blur-xl rounded-2xl border border-border">
            <Star className="w-6 h-6 text-neutral-700 mr-3" />
            <span className="text-foreground text-lg">
              {t("servicesPage.cta")}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
