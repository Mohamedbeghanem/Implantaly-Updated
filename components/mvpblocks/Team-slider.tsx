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
    name: 'Dr. Michael Chen',
    role: 'Lead Implantologist',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400&h=300&auto=format&fit=crop',
    socialLinks: {
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    id: '2',
    name: 'Dr. Sarah Williams',
    role: 'Endodontics Specialist',
    imageUrl: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=400&h=300&auto=format&fit=crop',
    socialLinks: {
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    id: '3',
    name: 'Dr. James Rodriguez',
    role: 'Prosthodontist',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=400&h=300&auto=format&fit=crop',
    socialLinks: {
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    id: '4',
    name: 'Dr. Emily Thompson',
    role: 'Periodontist',
    imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=400&h=300&auto=format&fit=crop',
    socialLinks: {
      twitter: '#',
      linkedin: '#',
    },
  },
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group bg-white h-[420px] w-80 flex-shrink-0 overflow-hidden rounded-xl shadow-sm transition-all hover:shadow-xl">
      <div className="relative h-[280px] w-full overflow-hidden">
        <img
          src={member.imageUrl}
          alt={member.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="mb-1 text-lg font-bold text-gray-900">{member.name}</h3>
        <p className="text-blue-600 text-sm mb-3">{member.role}</p>
        <div className="flex gap-x-4">
          <a href={member.socialLinks.twitter} className="text-gray-400 hover:text-gray-600">
            <Twitter size={20} />
          </a>
          <a href={member.socialLinks.linkedin} className="text-gray-400 hover:text-gray-600">
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
    <section className="mx-auto max-w-7xl py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Meet Our Expert Instructors
          </h2>
          <p className="text-gray-600 mx-auto max-w-2xl md:text-lg">
            Our team of world-class instructors are dedicated to providing the best hands-on training.
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
