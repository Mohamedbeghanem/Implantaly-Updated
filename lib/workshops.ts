export type CoursePersonRole = 'Instructor' | 'Speaker' | 'Surgeon' | 'Assistant' | 'Organizer';

export interface CoursePerson {
  name: string;
  role: CoursePersonRole;
}

export interface DentalCourse {
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
  people?: CoursePerson[];
  surgeon?: string; // Legacy fallback for older data sources.
  complexity?: string;
}

export function normalizeCoursePeople(course: DentalCourse): CoursePerson[] {
  if (course.people && course.people.length > 0) {
    return course.people;
  }

  const instructorName = course.instructor?.trim();
  if (instructorName) {
    return [{ name: instructorName, role: 'Instructor' }];
  }

  const surgeonName = course.surgeon?.trim();
  if (surgeonName) {
    return [{ name: surgeonName, role: 'Surgeon' }];
  }

  return [];
}

export function getPrimaryPerson(
  course: DentalCourse,
): { name: string; roleLabel: CoursePersonRole } | null {
  const people = normalizeCoursePeople(course).filter((person) => person.name.trim());

  if (people.length === 0) {
    return null;
  }

  const primaryPerson = people[0];
  return {
    name: primaryPerson.name,
    roleLabel: primaryPerson.role,
  };
}

export const dentalCourses: DentalCourse[] = [
  {
    id: '1',
    title: 'Micro Stratification personnalisee sur zircone',
    description: 'Learn advanced root canal treatment techniques using surgical microscopes...',
    instructor: 'Mr.Didier Crescenzo',
    duration: '2 Day',
    level: 'Intermediate',
    imageUrl: '/image00054.jpeg',
    price: 'Call for pricing',
    date: '09-10/05/2025',
    location: 'Hayatt Regeancy Algiers Airport',
    category: 'Prosthodontics',
    people: [{ name: 'Mr.Didier Crescenzo', role: 'Instructor' }],
    complexity: 'Intermediate',
  },
  {
    id: '2',
    title: 'Micro Stratification personnalisee sur zircone',
    description: 'Learn advanced root canal treatment techniques using surgical microscopes...',
    instructor: 'Take a Guess!',
    duration: '2 Day',
    level: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=400&h=300&auto=format&fit=crop',
    price: 'Call for pricing',
    date: 'Coming Soon',
    location: 'Hayatt Regeancy Algiers Airport',
    category: 'Prosthodontics',
    people: [{ name: 'Take a Guess!', role: 'Instructor' }],
    complexity: 'Intermediate',
  },
];
