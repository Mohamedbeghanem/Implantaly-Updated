export interface LiveSurgerySession {
  id: string;
  title: string;
  description: string;
  surgeon: string;
  duration: string;
  imageUrl: string;
  price: string;
  date?: string;
  location?: string;
  category: string;
  procedureType?: string;
  maxAttendees?: number;
  includedInPrice?: string[];
  complexity?: string;
  ceCreditHours?: number;
}

export const liveSurgerySessions: LiveSurgerySession[] = [
  {
    id: '1',
    title: 'masterclass in oral and implant surgery',
    description: '4 lives, 4 technics, 1 exclusive experience',
    surgeon: 'Dr Samir Hamimed,Dr Chaouki Selmania,Dr Samir Amarouche',
    duration: '2 Days', 
    imageUrl: '/image00068.jpeg',
    price: 'Contact us for pricing',
    date: '14-15/02/2026',
    location: 'Implantaly Dental Clinic by Hs',
    category: 'Implant Placement',
    procedureType: 'Full Arch Restoration',
    maxAttendees: 10,
    includedInPrice: ['clinical case presentation', 'expert commentary', 'educational support', 'certificate of Attendance'],
    complexity: 'Beginner', 
  },
];