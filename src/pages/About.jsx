
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-24 px-4 pb-12 max-w-4xl mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-12"
      >
        {/* Hero Section */}
        <motion.div variants={item} className="text-center space-y-4">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Passionate developer crafting digital experiences
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.section variants={item} className="space-y-6">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['React', 'Node.js', 'TypeScript', 'Tailwind'].map((skill) => (
              <div key={skill} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg text-center hover:transform hover:scale-105 transition-all">
                <div className="w-12 h-12 mx-auto mb-2 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  {/* Add skill icons here */}
                </div>
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section variants={item} className="space-y-6">
          <h2 className="text-2xl font-semibold">Journey</h2>
          <div className="space-y-4">
            {[
              { year: '2023', title: 'Senior Developer', description: 'Leading frontend development' },
              { year: '2022', title: 'Full Stack Developer', description: 'Building scalable applications' },
              { year: '2021', title: 'Started Coding', description: 'Beginning of the journey' }
            ].map((event, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-24 font-bold">{event.year}</div>
                <div className="flex-1 pb-4 border-l-2 border-gray-300 dark:border-gray-700 pl-4">
                  <h3 className="font-semibold">{event.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section variants={item} className="space-y-6">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Project 1', description: 'Description of project 1' },
              { title: 'Project 2', description: 'Description of project 2' }
            ].map((project, index) => (
              <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg hover:transform hover:scale-105 transition-all">
                <h3 className="font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section variants={item} className="space-y-6">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <div className="flex justify-center space-x-6">
            {[
              { Icon: FaGithub, href: '#' },
              { Icon: FaTwitter, href: '#' },
              { Icon: FaLinkedin, href: '#' },
              { Icon: FaEnvelope, href: 'mailto:example@email.com' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-2xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <social.Icon />
              </motion.a>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default About;
