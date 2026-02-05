"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HeartPulse, Target, ShieldCheck, Stethoscope, Phone } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "@/hooks/use-translations"

export function AboutUs2() {
  const { t } = useTranslations()
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t("aboutPage.title")}
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("aboutPage.subtitle")}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6 space-y-4">
                <Stethoscope className="h-10 w-10 text-neutral-800" />
                <h2 className="text-2xl font-bold">{t("aboutPage.cards.0.title")}</h2>
                <p className="text-gray-500">
                  {t("aboutPage.cards.0.description")}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <Target className="h-10 w-10 text-neutral-800" />
                <h2 className="text-2xl font-bold">{t("aboutPage.cards.1.title")}</h2>
                <p className="text-gray-500">
                  {t("aboutPage.cards.1.description")}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <ShieldCheck className="h-10 w-10 text-neutral-800" />
                <h2 className="text-2xl font-bold">{t("aboutPage.cards.2.title")}</h2>
                <p className="text-gray-500">
                  {t("aboutPage.cards.2.description")}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <HeartPulse className="h-10 w-10 text-neutral-800" />
                <h2 className="text-2xl font-bold">{t("aboutPage.cards.3.title")}</h2>
                <p className="text-gray-500">
                  {t("aboutPage.cards.3.description")}
                </p>
              </CardContent>
            </Card>
            <Card className="md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 space-y-4">
                <Phone className="h-10 w-10 text-neutral-800" />
                <h2 className="text-2xl font-bold">{t("aboutPage.cards.4.title")}</h2>
                <p className="text-gray-500">
                  {t("aboutPage.cards.4.description")}
                </p>
                <Button asChild>
                  <Link href="/contact">{t("aboutPage.cards.4.cta")}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
