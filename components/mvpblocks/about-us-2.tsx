"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Globe, BarChart, Phone } from "lucide-react"
import Link from "next/link"

export function AboutUs2() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">À propos d'Alta Academy</h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Votre partenaire pour l'excellence en dentisterie.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6 space-y-4">
                <Users className="h-10 w-10 text-green-500" />
                <h2 className="text-2xl font-bold">Présentation d’Alta Academy</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Alta Academy est une plateforme de formation dentaire de premier plan qui se consacre à l'amélioration des compétences et des connaissances des professionnels du secteur dentaire.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <Target className="h-10 w-10 text-green-500" />
                <h2 className="text-2xl font-bold">Notre but</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Nous nous engageons à fournir une formation de la plus haute qualité, basée sur des données probantes, afin de garantir que nos étudiants sont à la pointe des dernières avancées en dentisterie.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <Globe className="h-10 w-10 text-green-500" />
                <h2 className="text-2xl font-bold">Nous nous déplaçons</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Nous proposons des coachings en clinique en Algérie, en Italie et dans d'autres pays, afin d'offrir une formation pratique et personnalisée.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <BarChart className="h-10 w-10 text-green-500" />
                <h2 className="text-2xl font-bold">Métriques & partenaires</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Nous sommes fiers de nos indicateurs de réussite et de nos partenariats avec des institutions dentaires de premier plan.
                </p>
              </CardContent>
            </Card>
            <Card className="md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 space-y-4">
                <Phone className="h-10 w-10 text-green-500" />
                <h2 className="text-2xl font-bold">Contact rapide</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Vous avez une question ? Contactez-nous pour une réponse rapide.
                </p>
                <Button asChild>
                  <Link href="/contact">Contactez-nous</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
