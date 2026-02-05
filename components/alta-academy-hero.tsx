"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle, HeartPulse, ShieldCheck, Sparkles, Stethoscope } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "@/hooks/use-translations"

export function AltaAcademyHero() {
  const { t } = useTranslations()
  const features = [
    {
      icon: Stethoscope,
      title: t("home.hero.features.implantology.title"),
      description: t("home.hero.features.implantology.description"),
      gradient: "from-surface to-surface2"
    },
    {
      icon: Sparkles,
      title: t("home.hero.features.cosmetic.title"),
      description: t("home.hero.features.cosmetic.description"),
      gradient: "from-surface to-surface2"
    },
    {
      icon: ShieldCheck,
      title: t("home.hero.features.patientFirst.title"),
      description: t("home.hero.features.patientFirst.description"),
      gradient: "from-surface to-surface2"
    }
  ]
  return (
    <section className="relative w-full min-h-screen bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)_/_0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)_/_0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-gradient-to-r from-primary/15 to-accent/10 mix-blend-multiply blur-3xl opacity-60 animate-float"></div>
        <div className="absolute top-40 right-20 h-96 w-96 rounded-full bg-gradient-to-r from-accent/15 to-primary/10 mix-blend-multiply blur-3xl opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-40 h-80 w-80 rounded-full bg-gradient-to-r from-primary/10 to-accent/15 mix-blend-multiply blur-3xl opacity-60 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        {/* Main Hero Content */}
        <div className="text-center mb-20">
          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-border bg-surface2 px-6 py-3 text-sm font-medium text-accent mb-6 animate-fade-in">
              <HeartPulse className="w-4 h-4 mr-2" />
              {t("home.hero.badge")}
            </div>
            
            {/* Main Title */}
            <h1 className="font-bold text-3xl md:text-6xl lg:text-5xl xl:text-6xl text-foreground leading-tight animate-fade-in-up">
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                {t("home.hero.titleLine1")}
              </span>
              <br />
              <span className="text-foreground">{t("home.hero.titleLine2")}</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-muted leading-relaxed max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {t("home.hero.subtitle")}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" asChild className="group bg-primary text-primaryForeground shadow-sm transition-all duration-300 transform hover:scale-105 px-10 py-4 text-lg font-semibold rounded-xl border-0 hover:bg-primary/90">
                <Link href="/contact" className="flex items-center">
                  {t("home.hero.ctaPrimary")}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild className="group border-2 border-border bg-surface transition-all duration-300 transform hover:scale-105 px-10 py-4 text-lg font-semibold rounded-xl hover:bg-surface2">
                <Link href="/features" className="flex items-center text-foreground">
                  <Sparkles className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  {t("home.hero.ctaSecondary")}
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 pt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-muted font-medium">{t("home.hero.trustItems.0")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-muted font-medium">{t("home.hero.trustItems.1")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-muted font-medium">{t("home.hero.trustItems.2")}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group text-center p-8 bg-surface/90 backdrop-blur-xl border border-border rounded-2xl hover:bg-surface hover:border-border/80 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-sm"
              style={{ animationDelay: `${1.4 + index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-all duration-500 shadow-sm`}>
                <feature.icon className="w-10 h-10 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">{feature.title}</h3>
              <p className="text-muted leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
