import React from 'react';
import { motion } from 'framer-motion';
import { RocketIcon, ShieldCheckIcon, PresentationIcon } from 'lucide-react';

const AltaExperience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Innovative Approach',
      text: 'We embrace cutting-edge techniques and technologies to deliver the best possible outcomes.',
      icon: RocketIcon,
    },
    {
      id: 2,
      title: 'Unwavering Commitment',
      text: 'Your safety and satisfaction are our top priorities. We go above and beyond to ensure a positive experience.',
      icon: ShieldCheckIcon,
    },
    {
      id: 3,
      title: 'Expert Team',
      text: 'Our team of highly skilled and experienced professionals is dedicated to providing exceptional care.',
      icon: PresentationIcon,
    },
  ];

  return (
    <div
      className="container mx-auto py-24 bg-gradient-to-br from-gray-100 to-gray-200"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Alta Experience</h2>
        <p className="text-lg text-gray-700">
          Discover the Alta difference. We combine expertise, innovation, and
          compassion to deliver exceptional results.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {experiences.map((experience) => (
          <motion.div
            key={experience.id}
            className="p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: experience.id * 0.1 }}
          >
            <experience.icon className="w-6 h-6 mb-4 text-blue-500" />
            <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
            <p className="text-gray-700">{experience.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AltaExperience;