
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';

const About = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20"
    >
      <motion.div 
        className="max-w-4xl mx-auto px-4 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Profile Section with Animated Background */}
        <motion.section variants={itemVariants} className="text-center mb-20">
          <motion.div 
            className="relative w-40 h-40 mx-auto mb-8"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <img
              src="your-profile-image-url"
              alt="Profile"
              className="absolute inset-2 w-36 h-36 rounded-full object-cover border-4 border-white dark:border-gray-800"
            />
          </motion.div>
          <motion.h1 
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4"
            animate={{ 
              backgroundPosition: ["0%", "100%"],
              color: ["#2563eb", "#7c3aed"]
            }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          >
            About Me
          </motion.h1>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            A passionate developer focused on creating elegant and efficient solutions.
          </motion.p>
        </motion.section>

        {/* Skills Section with Hover Animations */}
        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="text-2xl font-semibold text-center mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: FaReact, name: 'React', color: 'text-blue-500' },
              { icon: FaNodeJs, name: 'Node.js', color: 'text-green-500' },
              { icon: FaDatabase, name: 'Database', color: 'text-yellow-500' },
              { icon: FaCode, name: 'TypeScript', color: 'text-purple-500' }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <skill.icon className={`w-10 h-10 mx-auto mb-3 ${skill.color}`} />
                </motion.div>
                <p className="text-center font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section with Card Animations */}
        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="text-2xl font-semibold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((_, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <motion.img 
                  src={`project${index + 1}-image-url`}
                  alt={`Project ${index + 1}`}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project {index + 1}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Description of project {index + 1}
                  </p>
                  <motion.a
                    href="#"
                    className="inline-flex items-center text-blue-500 hover:text-blue-600"
                    whileHover={{ x: 5 }}
                  >
                    View Project →
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Form with Input Animations */}
        <motion.section variants={itemVariants} className="max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">Get in Touch</h2>
          <motion.form 
            action="mailto:khoirulmustofa767@gmail.com"
            method="post"
            encType="text/plain"
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            >
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 transition-all"
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg hover:opacity-90 transition-all"
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.section>
      </motion.div>
    </motion.div>
  );
};

export default About;
