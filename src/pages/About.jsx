
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const About = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen bg-gray-50 dark:bg-gray-900"
    >
      <div className="pt-24 px-4 pb-12 max-w-4xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-12"
        >
          {/* Hero Section with Animated Profile */}
          <motion.div 
            variants={item} 
            className="text-center space-y-6"
          >
            <motion.div 
              className="relative w-40 h-40 mx-auto"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin-slow"></div>
              <img
                src="your-profile-image-url"
                alt="Profile"
                className="absolute inset-2 w-36 h-36 rounded-full object-cover border-4 border-white dark:border-gray-800"
              />
            </motion.div>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Natsumi つ内
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Passionate developer crafting digital experiences
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.section variants={item} className="space-y-6">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['React', 'Node.js', 'TypeScript', 'Tailwind'].map((skill, index) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white dark:bg-gray-800 backdrop-blur-lg p-4 rounded-lg text-center shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    {/* Add skill icons here */}
                  </div>
                  <p>{skill}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Timeline with Animation */}
          <motion.section variants={item} className="space-y-6">
            <h2 className="text-2xl font-semibold">Journey</h2>
            <div className="space-y-4">
              {[
                { year: '2023', title: 'Senior Developer', description: 'Leading frontend development' },
                { year: '2022', title: 'Full Stack Developer', description: 'Building scalable applications' },
                { year: '2021', title: 'Started Coding', description: 'Beginning of the journey' }
              ].map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-4"
                >
                  <div className="w-24 font-bold">{event.year}</div>
                  <div className="flex-1 pb-4 border-l-2 border-blue-500 dark:border-purple-500 pl-4">
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Projects Grid */}
          <motion.section variants={item} className="space-y-6">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Project 1', description: 'Description of project 1' },
                { title: 'Project 2', description: 'Description of project 2' }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 backdrop-blur-lg p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section variants={item} className="space-y-6">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <div className="flex justify-center space-x-6">
              {[FaGithub, FaTwitter, FaLinkedin, FaEnvelope].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-2xl text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-purple-500 transition-colors"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
