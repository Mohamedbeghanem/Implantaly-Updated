'use client';

import DefinitionSection from '../../../components/DefinitionSection';
import StepsSection from '../../../components/StepsSection';
import AltaExperience from '../../../components/AltaExperience';
import LiveSteps from '../../../components/mvpblocks/live-steps';
import { useState } from 'react';
import { Calendar, Clock, MapPin, Award, Filter, Search } from 'lucide-react';
import { LiveSurgerySession, liveSurgerySessions } from '@/lib/liveSurgery';
import Link from 'next/link';
import { Hero7 } from '@/components/hero7';


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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50">
      <Hero7 />
      <StepsSection />
      <AltaExperience />
      <LiveSteps />
      {/* Filters Section */}
      <section className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search sessions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredSessions.length} Session{filteredSessions.length !== 1 ? 's' : ''} Found
            </h2>
          </div>

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
        </div>
      </section>
    </div>
  );
}
