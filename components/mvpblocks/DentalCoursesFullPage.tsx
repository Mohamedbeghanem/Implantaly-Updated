'use client';

import { useState } from 'react';
import { Calendar, Clock, MapPin, Award, Filter, Search } from 'lucide-react';
import { dentalCourses, DentalCourse, getPrimaryPerson } from '@/lib/workshops';

function CourseCardGrid({ course }: { course: DentalCourse }) {
  const levelColors: Record<DentalCourse['level'], string> = {
    Beginner: 'bg-green-100 text-green-700',
    Intermediate: 'bg-blue-100 text-blue-700',
    Advanced: 'bg-purple-100 text-purple-700',
  };
  const primaryPerson = getPrimaryPerson(course);

  return (
    <div className="group bg-white overflow-hidden rounded-xl shadow-sm transition-all hover:shadow-xl">
      <div className="relative h-[240px] w-full overflow-hidden">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1.5 text-xs font-semibold rounded-full ${levelColors[course.level]}`}>
            {course.level}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-white text-xs font-medium mb-1 flex items-center">
            <Award className="mr-1.5 h-4 w-4" />
            {course.category}
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="mb-2 text-lg font-bold text-gray-800 ">{course.title}</h3>
        <p className="text-gray-500 text-sm mb-3 ">{course.description}</p>

        <div className="space-y-1.5 mb-3 text-sm text-gray-500">
          {course.date && (
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4 text-blue-500" />
              {course.date}
            </div>
          )}
          {course.location && (
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4 text-blue-500" />
              {course.location}
            </div>
          )}
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4 text-blue-500" />
            {course.duration}
          </div>
        </div>

        {course.features && (
          <div className="mb-4 flex flex-wrap gap-2">
            {course.features.map((feature: string) => (
              <span key={feature} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
                {feature}
              </span>
            ))}
          </div>
        )}

        <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
          {primaryPerson && (
            <div>
              <p className="text-xs text-gray-400">{primaryPerson.roleLabel}</p>
              <p className="text-sm font-semibold text-gray-800">{primaryPerson.name}</p>
            </div>
          )}
          <div className="text-right">
            <p className="text-xl font-bold text-blue-500">{course.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DentalCoursesFullPage() {
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...Array.from(new Set(dentalCourses.map((c: DentalCourse) => c.category)))];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = dentalCourses.filter((course: DentalCourse) => {
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className=" text-white py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
              Live Surgery Courses
            </h1>
            <p className="text-lg md:text-xl text-gray-500 mb-8">
            Learn from the best with hands-on live surgery demonstrations and advanced training programs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 text-gray-900">
                <p className="text-3xl font-bold ">{dentalCourses.length}+</p>
                <p className="text-sm text-gray-500">Courses Available</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 text-gray-900">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm text-gray-500">Expert Instructors</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 text-gray-900">
                <p className="text-3xl font-bold">5000+</p>
                <p className="text-sm text-gray-500">Students Trained</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600 font-medium">Filter by:</span>
              </div>
              
              {/* Level Filter */}
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level === 'All' ? 'All Levels' : level}
                  </option>
                ))}
              </select>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map((category) => (
                  <option key={String(category)} value={String(category)}>
                    {category === 'All' ? 'All Categories' : String(category)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredCourses.length} Course{filteredCourses.length !== 1 ? 's' : ''} Found
            </h2>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course: DentalCourse) => (
                <CourseCardGrid key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedLevel('All');
                  setSelectedCategory('All');
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
