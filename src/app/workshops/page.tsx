'use client';
import { useState } from 'react';
import { Calendar, Clock, MapPin, Award, Filter, Search, Import } from 'lucide-react';
import { DentalCourse, dentalCourses } from '@/lib/workshops';
import Link from 'next/link';
import { Hero2 } from '@/components/hero2';
import {Process2} from '@/components/process2';
import {Process22} from '@/components/process22';
import {Faq2} from '@/components/faqworkshop';
import { Footer } from "@/components/footer"
import { Featureworkshop } from '@/components/featureworkshop';


function WorkshopCardGrid({ session }: { session: DentalCourse }) {
  const complexityColors: Record<string, string> = {
    Beginner: 'bg-primary text-primaryForeground',
    Intermediate: 'bg-surface2 text-foreground',
    Advanced: 'bg-accent text-accentForeground',
  };
  const complexity = (session.complexity || 'Beginner') as string;

  return (
    <Link href={`/workshops/${session.id}`}>
      <div className="group bg-surface overflow-hidden rounded-xl border border-border shadow-sm transition-all hover:shadow-md">
        <div className="relative h-[240px] w-full overflow-hidden">
          <img
            src={session.imageUrl}
            alt={session.title}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1.5 text-xs font-semibold rounded-full ${complexityColors[complexity]}`}>
              {complexity}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="text-primaryForeground text-xs font-medium mb-1 flex items-center">
              <Award className="mr-1.5 h-4 w-4" />
              {session.category}
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="mb-3 text-xl font-bold text-foreground line-clamp-1">{session.title}</h3>
          <p className="text-muted text-sm mb-4 line-clamp-2">{session.description}</p>

          <div className="space-y-2 mb-4 text-sm text-muted">
            {session.date && (
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-primary" />
                {session.date}
              </div>
            )}
            {session.location && (
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-primary" />
                {session.location}
              </div>
            )}
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4 text-primary" />
              {session.duration}
            </div>
          </div>

          <div className="pt-4 border-t border-border flex items-center justify-between">
            <div>
              <p className="text-xs text-muted">Surgeon</p>
              <p className="text-sm font-semibold text-foreground">{session.instructor}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-primary">{session.price}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}


export default function WorkshopsPage() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSessions = dentalCourses.filter((session: DentalCourse) => {
    return session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           session.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero2
        heading="Alta Workshops"
        description="Les workshops Alta Academy sont organisés sous forme de formations pratiques intensives, orientées sur l’acquisition de gestes maîtrisés, de protocoles clairs et de résultats reproductibles."
        image={{
          src: '/image00044.jpeg',
          alt: 'Workshop session in progress',
        }}
      />
      {/* Filters Section */}
      <section className="sticky top-0 z-10 bg-surface border-b border-border shadow-sm">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
          </div>
        </div>
      </section>
      <Process2 />
      <Process22 />
      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          {filteredSessions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSessions.map((session: DentalCourse) => (
                <WorkshopCardGrid key={session.id} session={session} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted text-lg">No sessions found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                }}
                className="mt-4 text-foreground hover:text-accent font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
          <Featureworkshop />
          <Faq2  />
        </div>
      </section>
    <Footer />

    </div>

  );
}
