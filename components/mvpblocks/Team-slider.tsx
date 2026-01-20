'use client';

import { useState, useEffect } from 'react';
import { Linkedin, Twitter } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  socialLinks: {
    twitter: string;
    linkedin: string;
  }
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Samir Hamimed',
    role: 'Expert in Oral Implantology',
    imageUrl: '/drsamirhamimed.jpeg',
    socialLinks: {
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    id: '2',
    name: 'Dr. Samir Amarouche',
    role: 'Expert in Guided Surgery',
    imageUrl: '/drsamiramarouche.jpeg',
    socialLinks: {
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    id: '3',
    name: 'Dr. Chaouki Selmania',
    role: 'Expert in Oral Implantology',
    imageUrl: '/selmaniyachaouki.jpeg',
    socialLinks: {
      twitter: '#',
      linkedin: '#',
    },
  },
   {
    id: '4',
    name: 'Mr. Didier Crescenzo',
    role: 'Prothesiste',
    imageUrl: '/didier.jpg',
    socialLinks: {
      twitter: '#',
      linkedin: '#',
    },
  },
    {
    id: '5',
    name: 'Dr. Nawel Kara',
    role: 'Expert in Oral Implantology',
    imageUrl: '/placeholder.svg',
    socialLinks: {
      twitter: '#',
      linkedin: '#',
    },
  },  
  {
    id: '6',
    name: 'Dr. Farid Ouzrourou',
    role: 'Expert in Oral Implantology',
    imageUrl: '/placeholder.svg',
    socialLinks: {
      twitter: '#',
      linkedin: '#',
    },
  },
     {
    id: '4',
    name: 'Dr. Adel Kara',
    role: 'Expert in Oral Implantology',
    imageUrl: '/placeholder.svg',
    socialLinks: {
      twitter: '#',
      linkedin: '#',
    },
  },
];
   

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group h-[420px] w-80 flex-shrink-0 overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-all hover:shadow-md">
      <div className="relative h-[280px] w-full overflow-hidden">
        <img
          src={member.imageUrl}
          alt={member.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="mb-1 text-lg font-bold text-foreground">{member.name}</h3>
        <p className="text-sm text-accent mb-3">{member.role}</p>
        <div className="flex gap-x-4">
          <a href={member.socialLinks.twitter} className="text-muted hover:text-accent">
            <Twitter size={20} />
          </a>
          <a href={member.socialLinks.linkedin} className="text-muted hover:text-accent">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function TeamSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev >= teamMembers.length - 1 ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mx-auto max-w-7xl py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Meet Our Expert Instructors
          </h2>
          <p className="text-muted mx-auto max-w-2xl md:text-lg">
            Our team of world-class instructors are dedicated to providing the best hands-on training.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (320 + 24)}px)`,
              }}
            >
              {teamMembers.map((member: TeamMember) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {teamMembers.map((_: TeamMember, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index ? 'w-8 bg-accent' : 'w-2 bg-surface2 hover:bg-primary/30'
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
