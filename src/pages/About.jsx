
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';

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
      className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20"
    >
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-12">
          {/* Profile Section */}
          <motion.section variants={item} className="text-center">
            <motion.div 
              className="relative w-32 h-32 mx-auto mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin-slow"></div>
              <img
                src="your-profile-image-url"
                alt="Profile"
                className="absolute inset-1 w-30 h-30 rounded-full object-cover border-4 border-white dark:border-gray-800"
              />
            </motion.div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              About Me
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A passionate developer focused on creating elegant and efficient solutions. 
              I love exploring new technologies and building projects that make a difference.
            </p>
          </motion.section>

          {/* Skills Section */}
          <motion.section variants={item} className="space-y-6">
            <h2 className="text-2xl font-semibold text-center mb-6">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: FaReact, name: 'React', color: 'text-blue-500' },
                { icon: FaNodeJs, name: 'Node.js', color: 'text-green-500' },
                { icon: FaDatabase, name: 'Database', color: 'text-yellow-500' },
                { icon: FaCode, name: 'TypeScript', color: 'text-purple-500' }
              ].map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 backdrop-blur-lg p-4 rounded-lg text-center shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <skill.icon className={`w-8 h-8 mx-auto mb-2 ${skill.color}`} />
                  <p className="text-sm">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Projects Section */}
          <motion.section variants={item} className="space-y-6">
            <h2 className="text-2xl font-semibold text-center mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Project 1',
                  image: 'project1-image-url',
                  description: 'A modern web application built with React and Node.js',
                  link: 'https://github.com/yourusername/project1'
                },
                {
                  title: 'Project 2',
                  image: 'project2-image-url',
                  description: 'Full-stack application with real-time features',
                  link: 'https://github.com/yourusername/project2'
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 backdrop-blur-lg rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-blue-500 hover:text-blue-600"
                    >
                      View Project →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact Form */}
          <motion.section variants={item} className="max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-6">Get in Touch</h2>
            <form 
              action={`mailto:khoirulmustofa767@gmail.com`}
              method="post"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </motion.section>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
