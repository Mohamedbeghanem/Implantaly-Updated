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
  surgeon?: string;
  complexity?: string;
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
    surgeon: 'Mr.Didier Crescenzo',
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
    surgeon: 'Take a Guess!',
    complexity: 'Intermediate',
  },
];
