'use client';

import DefinitionSection from '../../../components/DefinitionSection';
import StepsSection from '../../../components/StepsSection';
import AltaExperience from '../../../components/AltaExperience';
import LiveSteps from '../../../components/mvpblocks/live-steps';
import { useState } from 'react';
import { Calendar, Clock, MapPin, Award, Filter, Search, Import } from 'lucide-react';
import { LiveSurgerySession, liveSurgerySessions } from '@/lib/liveSurgery';
import Link from 'next/link';
import { Hero1 } from '@/components/hero1';
import {Process1} from '@/components/process1';
import {Cta10}  from '@/components/cta10';  
import {Faq1} from '@/components/faq1';
import { Feature43 } from '@/components/featurelive';
import { Footer } from "@/components/footer"


function LiveSurgeryCardGrid({ session }: { session: LiveSurgerySession }) {
  const complexityColors: Record<string, string> = {
    Beginner: 'bg-green-100 text-green-700',
    Intermediate: 'bg-blue-100 text-blue-700',
    Advanced: 'bg-purple-100 text-purple-700',
  };
  const complexity = (session.complexity || 'Beginner') as string;

  return (
    <Link href={`/live-surgery/${session.id}`}>
      <div className="group bg-white overflow-hidden rounded-xl shadow-sm transition-all hover:shadow-xl">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="text-white text-xs font-medium mb-1 flex items-center">
              <Award className="mr-1.5 h-4 w-4" />
              {session.category}
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="mb-3 text-xl font-bold text-gray-900 line-clamp-1">{session.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{session.description}</p>

          <div className="space-y-2 mb-4 text-sm text-gray-600">
            {session.date && (
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-blue-600" />
                {session.date}
              </div>
            )}
            {session.location && (
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-blue-600" />
                {session.location}
              </div>
            )}
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4 text-blue-600" />
              {session.duration}
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">Surgeon</p>
              <p className="text-sm font-semibold text-gray-900">{session.surgeon}</p>
            </div>
            <div className="text-right">
              <button className="mt-2 text-white text-sm px-4 py-2 rounded-lg transition-colors">
                <p className="text-2xl font-bold text-blue-600">{session.price}</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}


export default function LiveSurgeryPage() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSessions = liveSurgerySessions.filter((session: LiveSurgerySession) => {
    return session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           session.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Hero1
        heading="Live Surgery Sessions"
        description="Witness live surgical procedures performed by world-renowned experts. Enhance your skills and knowledge by observing real-time cases."
        image={{
          src: '/image00001.jpeg',
          alt: 'Live surgery session in progress',
        }}
      />
      {/* Filters Section */}
      <section className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
          </div>
        </div>
      </section>
      <Process1 />
      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          {filteredSessions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSessions.map((session: LiveSurgerySession) => (
                <LiveSurgeryCardGrid key={session.id} session={session} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No sessions found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                }}
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
          <Feature43 />
          <Faq1 />
           <Cta10
      heading="Join Our Live Surgery Sessions Today!"
      description="Don't miss out on the opportunity to learn from the best in the field. Sign up for our live surgery sessions and take your skills to the next level."
      buttons={{
        primary: {
          text: "Sign Up Now",
          url: "/signup",
        },
        secondary: {
          text: "Learn More",
          url: "/about-live-surgery",}}}
    />
        </div>
      </section>
    <Footer />

    </div>

  );
}
