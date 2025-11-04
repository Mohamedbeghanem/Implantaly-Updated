
// ============================================
// FILE: lib/coursesData.ts (or data/coursesData.ts)
// ============================================

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