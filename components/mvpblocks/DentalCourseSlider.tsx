// ============================================
// FILE: components/mvpblocks/DentalCourseSlider.tsx
// ============================================

'use client';

import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Award } from 'lucide-react';

// Define types and data directly in the component for now
interface DentalCourse {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  imageUrl: string;
  price: string;
  date?: string;
  location?: string;
  category: string;
  features?: string[];
}

const dentalCourses: DentalCourse[] = [
  {
    id: '1',
    title: 'Advanced Implant Surgery',
    description: 'Master the latest techniques in dental implant placement with hands-on live surgery demonstrations.',
    instructor: 'Dr. Michael Chen',
    duration: '2 Days',
    level: 'Advanced',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400&h=300&auto=format&fit=crop',
    price: '$2,500',
    date: 'Dec 15-16, 2025',
    location: 'New York, NY',
    category: 'Implantology',
    features: ['Live Surgery', 'Hands-on Practice', 'Certificate'],
  },
  {
    id: '2',
    title: 'Endodontic Microsurgery',
    description: 'Learn advanced root canal treatment techniques using surgical microscopes in real-time procedures.',
    instructor: 'Dr. Sarah Williams',
    duration: '1 Day',
    level: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=400&h=300&auto=format&fit=crop',
    price: '$1,800',
    date: 'Jan 10, 2026',
    location: 'Los Angeles, CA',
    category: 'Endodontics',
    features: ['Live Surgery', 'Microscope Training', 'CE Credits'],
  },
  {
    id: '3',
    title: 'Aesthetic Crown Preparation',
    description: 'Perfect your crown preparation skills with live demonstrations on anterior and posterior teeth.',
    instructor: 'Dr. James Rodriguez',
    duration: '3 Days',
    level: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=400&h=300&auto=format&fit=crop',
    price: '$2,200',
    date: 'Feb 5-7, 2026',
    location: 'Miami, FL',
    category: 'Prosthodontics',
    features: ['Live Surgery', 'Digital Workflow', 'Lab Access'],
  },
  {
    id: '4',
    title: 'Surgical Periodontics',
    description: 'Advanced periodontal surgery techniques including soft tissue grafting and pocket reduction.',
    instructor: 'Dr. Emily Thompson',
    duration: '2 Days',
    level: 'Advanced',
    imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=400&h=300&auto=format&fit=crop',
    price: '$2,100',
    date: 'Mar 12-13, 2026',
    location: 'Chicago, IL',
    category: 'Periodontics',
    features: ['Live Surgery', 'Tissue Grafting', 'Suturing Workshop'],
  },
  {
    id: '5',
    title: 'Wisdom Tooth Extraction',
    description: 'Comprehensive course on third molar surgery with live patient demonstrations and complications management.',
    instructor: 'Dr. Robert Martinez',
    duration: '1 Day',
    level: 'Beginner',
    imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=400&h=300&auto=format&fit=crop',
    price: '$1,500',
    date: 'Apr 8, 2026',
    location: 'Houston, TX',
    category: 'Oral Surgery',
    features: ['Live Surgery', 'Safety Protocols', 'Q&A Session'],
  },
  {
    id: '6',
    title: 'Full Arch Rehabilitation',
    description: 'Complete guide to full mouth reconstruction using implants with live surgery on complex cases.',
    instructor: 'Dr. Lisa Anderson',
    duration: '4 Days',
    level: 'Advanced',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&h=300&auto=format&fit=crop',
    price: '$3,500',
    date: 'May 20-23, 2026',
    location: 'San Francisco, CA',
    category: 'Implantology',
    features: ['Live Surgery', 'Digital Planning', 'All-on-4 Technique'],
  },
];

function CourseCard({ course }: { course: DentalCourse }) {
  const levelColors: Record<DentalCourse['level'], string> = {
    Beginner: 'bg-green-100 text-green-700',
    Intermediate: 'bg-blue-100 text-blue-700',
    Advanced: 'bg-purple-100 text-purple-700',
  };

  return (
    <div className="group bg-white h-[480px] w-80 flex-shrink-0 overflow-hidden rounded-xl shadow-sm transition-all hover:shadow-xl">
      <div className="relative h-[200px] w-full overflow-hidden">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${levelColors[course.level]}`}>
            {course.level}
          </span>
        </div>
      </div>

      <div className="flex h-[280px] flex-col p-5">
        <div className="text-blue-600 mb-2 flex items-center text-xs font-medium">
          <Award className="mr-1.5 h-3.5 w-3.5" />
          {course.category}
        </div>

        <h3 className="mb-2 text-lg font-bold text-gray-900 line-clamp-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{course.description}</p>

        <div className="space-y-1.5 mb-3 text-xs text-gray-600">
          {course.date && (
            <div className="flex items-center">
              <Calendar className="mr-2 h-3.5 w-3.5" />
              {course.date}
            </div>
          )}
          {course.location && (
            <div className="flex items-center">
              <MapPin className="mr-2 h-3.5 w-3.5" />
              {course.location}
            </div>
          )}
          <div className="flex items-center">
            <Clock className="mr-2 h-3.5 w-3.5" />
            {course.duration}
          </div>
        </div>

        <div className="mt-auto pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">Instructor</p>
              <p className="text-sm font-semibold text-gray-900">{course.instructor}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-600">{course.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DentalCourseSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev >= dentalCourses.length - 1 ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mx-auto max-w-7xl py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Live Surgery Courses
          </h2>
          <p className="text-gray-600 mx-auto max-w-2xl md:text-lg">
            Learn from the best with hands-on live surgery demonstrations and advanced training programs.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (320 + 24)}px)`,
              }}
            >
              {dentalCourses.map((course: DentalCourse) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {dentalCourses.map((_: DentalCourse, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}