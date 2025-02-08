
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-24 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <motion.h1 
          className="text-4xl font-bold text-center"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>

        <motion.div 
          className="bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-xl p-6 shadow-xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-lg leading-relaxed">
            Hi there! I'm a passionate developer who loves creating beautiful and functional web experiences.
            I enjoy working with modern technologies and always strive to learn new things.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <ul className="space-y-2">
              <li>React & Modern JavaScript</li>
              <li>Tailwind CSS & Animation</li>
              <li>UI/UX Design</li>
              <li>Full Stack Development</li>
            </ul>
          </div>

          <div className="bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Interests</h2>
            <ul className="space-y-2">
              <li>Web Development</li>
              <li>Open Source</li>
              <li>Creative Coding</li>
              <li>Digital Art</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
