import React from 'react';
import { motion } from 'framer-motion';

const StepsSection = () => {
  const steps = [
    { id: 1, title: 'Step 1', text: 'Description for step 1' },
    { id: 2, title: 'Step 2', text: 'Description for step 2' },
    { id: 3, title: 'Step 3', text: 'Description for step 3' },
  ];

  return (
    <div className="container mx-auto py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div>
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className="mb-8 p-6 rounded-lg shadow-md"
              style={{ backgroundColor: 'white' }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: step.id * 0.2 }}
            >
              <h3 className="text-xl font-bold mb-2">
                {step.id}. {step.title}
              </h3>
              <p className="text-gray-700">{step.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Right Column */}
        <div>
          <img
            src="/placeholder.jpg" // Replace with your image
            alt="Placeholder Image"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default StepsSection;