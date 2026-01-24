import { dentalCourses, DentalCourse, getPrimaryPerson } from '@/lib/workshops';
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, MapPin, User, BarChart, Award } from "lucide-react"

export default async function WorkshopDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const Workshop = dentalCourses.find((session) => session.id === id);

  if (!Workshop) {
    return notFound();
  }
  const primaryPerson = getPrimaryPerson(Workshop);

  return (
    <main className="min-h-screen bg-background">
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <Image
                src={Workshop.imageUrl}
                alt={Workshop.title}
                width={800}
                height={600}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{Workshop.title}</h1>
                <p className="text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {Workshop.description}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {primaryPerson && (
                  <div className="flex items-center space-x-2">
                    <User className="h-6 w-6" />
                    <div>
                      <p className="font-semibold">{primaryPerson.roleLabel}</p>
                      <p>{primaryPerson.name}</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center space-x-2">
                  <Clock className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">Duration</p>
                    <p>{Workshop.duration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <BarChart className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">Complexity</p>
                    <p>{Workshop.complexity || 'Beginner'}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">Date</p>
                    <p>{Workshop.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p>{Workshop.location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">Category</p>
                    <p>{Workshop.category}</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">Register for this workshop</h2>
                    <p className="text-sm text-muted">
                      Complete registration on a dedicated page.
                    </p>
                  </div>
                  <div className="text-left text-sm text-muted sm:text-right">
                    <div className="font-semibold text-foreground">Limited seats</div>
                    Early confirmation is recommended.
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg">
                    <Link href={`/workshops/${Workshop.id}/register`}>Register Now</Link>
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
  );
}
