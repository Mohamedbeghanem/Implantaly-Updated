import { liveSurgerySessions, LiveSurgerySession } from '@/lib/liveSurgery';
import Image from "next/image"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Calendar, Clock, MapPin, User, BarChart, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default async function LiveSurgeryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const liveSurgery = liveSurgerySessions.find((session) => session.id === id)

  if (!liveSurgery) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <Image
                src={liveSurgery.imageUrl}
                alt={liveSurgery.title}
                width={1000}
                height={1000}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Session Includes</h2>
                <ul className="grid gap-2">
                  {liveSurgery.includedInPrice?.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{liveSurgery.title}</h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {liveSurgery.description}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-2">
                  <User className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">Surgeon</p>
                    <p>{liveSurgery.surgeon}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">Duration</p>
                    <p>{liveSurgery.duration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <BarChart className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">Complexity</p>
                    <p>{liveSurgery.complexity}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">Date</p>
                    <p>{liveSurgery.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p>{liveSurgery.location}</p>
                  </div>
                </div>
                {liveSurgery.procedureType && (
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-6 w-6" />
                    <div>
                      <p className="font-semibold">Procedure</p>
                      <p>{liveSurgery.procedureType}</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">Register for this session</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Complete registration on a dedicated page.
                    </p>
                  </div>
                  <div className="text-left text-sm text-gray-500 dark:text-gray-400 sm:text-right">
                    <div className="font-semibold text-gray-900 dark:text-white">Limited seats</div>
                    Early confirmation is recommended.
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg">
                    <Link href={`/live-surgery/${liveSurgery.id}/register`}>Register Now</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/contact">Contact for More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          </div>
      </section>
    </main>
  )
}
