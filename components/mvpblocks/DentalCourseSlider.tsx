// ============================================
// FILE: components/mvpblocks/DentalCourseSlider.tsx
// ============================================

'use client';

import { useRef } from 'react';
import { Calendar, Clock, MapPin, Award } from 'lucide-react';
import { useScrollSlider } from '@/hooks/useScrollSlider';
import { dentalCourses, DentalCourse } from '@/lib/workshops';

function CourseCard({ course }: { course: DentalCourse }) {
  const levelColors: Record<DentalCourse['level'], string> = {
    Beginner: 'bg-green-200 text-green-800',
    Intermediate: 'bg-blue-200 text-blue-800',
    Advanced: 'bg-purple-200 text-purple-800',
  };

  return (
    <div className="group bg-white h-[480px] w-80 flex-shrink-0 overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-2xl">
      <div className="relative h-[200px] w-full overflow-hidden">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 text-sm font-bold rounded-full ${levelColors[course.level]}`}>
            {course.level}
          </span>
        </div>
      </div>

      <div className="flex h-[280px] flex-col p-6">
        <div className="text-green-700 mb-2 flex items-center text-sm font-semibold">
          <Award className="mr-2 h-4 w-4" />
          {course.category}
        </div>

        <h3 className="mb-2 text-xl font-bold text-gray-900 line-clamp-2">{course.title}</h3>
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{course.description}</p>

        <div className="space-y-2 mb-4 text-sm text-gray-700">
          {course.date && (
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4 text-green-700" />
              {course.date}
            </div>
          )}
          {course.location && (
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4 text-green-700" />
              {course.location}
            </div>
          )}
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4 text-green-700" />
            {course.duration}
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Instructor</p>
              <p className="text-md font-bold text-gray-900">{course.instructor}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-extrabold text-green-700">{course.price}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
    </div>
  );
}

export default function DentalCourseSlider() {
  const { currentIndex, sliderRef } = useScrollSlider(dentalCourses.length);

  return (
    <section className="mx-auto max-w-7xl py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Discover Our Workshops
          </h2>
          <p className="text-gray-600 mx-auto max-w-2xl md:text-lg">
            Learn from the best with hands-on live surgery demonstrations and advanced training programs.
          </p>
        </div>

        <div className="relative">
          <div ref={sliderRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {dentalCourses.map((course: DentalCourse) => (
              <div key={course.id} className="snap-center">
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
