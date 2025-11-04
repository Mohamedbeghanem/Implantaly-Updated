export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  location?: string;
  socialLinks?: { platform: 'github' | 'twitter' | 'linkedin'; url: string }[];
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
}

export const dentalCourses: DentalCourse[] = [
  {
    id: '1',
    title: 'Course Title 1',
    description: 'Course description goes here. This is placeholder text that you can replace with your actual course details.',
    instructor: 'Instructor Name',
    duration: '2 Days',
    level: 'Advanced',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400&h=300&auto=format&fit=crop',
    price: '$0',
    date: 'TBD',
    location: 'Location TBD',
    category: 'Category 1',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    id: '2',
    title: 'Course Title 2',
    description: 'Course description goes here. This is placeholder text that you can replace with your actual course details.',
    instructor: 'Instructor Name',
    duration: '1 Day',
    level: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=400&h=300&auto=format&fit=crop',
    price: '$0',
    date: 'TBD',
    location: 'Location TBD',
    category: 'Category 2',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    id: '3',
    title: 'Course Title 3',
    description: 'Course description goes here. This is placeholder text that you can replace with your actual course details.',
    instructor: 'Instructor Name',
    duration: '3 Days',
    level: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=400&h=300&auto=format&fit=crop',
    price: '$0',
    date: 'TBD',
    location: 'Location TBD',
    category: 'Category 3',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    id: '4',
    title: 'Course Title 4',
    description: 'Course description goes here. This is placeholder text that you can replace with your actual course details.',
    instructor: 'Instructor Name',
    duration: '2 Days',
    level: 'Advanced',
    imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=400&h=300&auto=format&fit=crop',
    price: '$0',
    date: 'TBD',
    location: 'Location TBD',
    category: 'Category 4',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    id: '5',
    title: 'Course Title 5',
    description: 'Course description goes here. This is placeholder text that you can replace with your actual course details.',
    instructor: 'Instructor Name',
    duration: '1 Day',
    level: 'Beginner',
    imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=400&h=300&auto=format&fit=crop',
    price: '$0',
    date: 'TBD',
    location: 'Location TBD',
    category: 'Category 5',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    id: '6',
    title: 'Course Title 6',
    description: 'Course description goes here. This is placeholder text that you can replace with your actual course details.',
    instructor: 'Instructor Name',
    duration: '4 Days',
    level: 'Advanced',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&h=300&auto=format&fit=crop',
    price: '$0',
    date: 'TBD',
    location: 'Location TBD',
    category: 'Category 6',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
];