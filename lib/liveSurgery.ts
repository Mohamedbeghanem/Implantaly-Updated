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
}

export const liveSurgerySessions: LiveSurgerySession[] = [
  {
    id: '1',
    title: 'Live Surgery Session 1',
    description: 'Live surgery session description goes here. This is placeholder text that you can replace with your actual session details.',
    surgeon: 'Dr Samir Hamimed,Dr Chaouki Selmania,Dr Samir Amarouche',
    duration: '2 Days', 
    imageUrl: '/placeholder.png',
    price: 'Contact us for pricing',
    date: '04-05/12/2025',
    location: 'Implantaly Dental Clinic by Hs',
    category: 'Implant Placement',
    procedureType: 'Full Arch Restoration',
    maxAttendees: 10,
    includedInPrice: ['Observation Access', 'Course Materials', 'Certificate'],
    complexity: 'Beginner',
  },
];