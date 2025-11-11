import React from 'react';
import { motion } from 'framer-motion';

const DefinitionSection = () => {
  return (
    <motion.div
      className="container mx-auto py-24"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div>
          <motion.h2 className="text-3xl font-bold mb-8">
            Definition Section
          </motion.h2>
          <motion.p className="text-lg">
            This is the paragraph text for the definition section. It should
            provide a clear and concise explanation of the topic.
          </motion.p>
        </div>

        {/* Right Column */}
        <div>
          <motion.img
            src="/placeholder.jpg" // Replace with your image
            alt="Placeholder Image"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default DefinitionSection;