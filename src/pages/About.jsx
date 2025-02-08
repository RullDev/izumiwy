import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaPython, FaJs } from 'react-icons/fa';

const About = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const floatingAnimation = {
    y: ['-10px', '10px'],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut'
    }
  };

  const starVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-indigo-900 pt-20 relative overflow-hidden"
    >
      {/* Animated Stars Background */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          variants={starVariants}
          animate="animate"
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto px-4 py-8 relative z-10">
        {/* Profile Section */}
        <motion.section animate={floatingAnimation} className="text-center mb-20">
          <div className="relative w-40 h-40 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse" />
            <motion.div
              className="absolute inset-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-75"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <img
              src="your-profile-image-url"
              alt="Profile"
              className="absolute inset-3 w-34 h-34 rounded-full object-cover border-4 border-purple-300/30"
            />
          </div>
          <motion.h1 
            className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4"
            animate={{ 
              backgroundPosition: ["0%", "100%"],
              color: ["#2dd4bf", "#a855f7"]
            }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          >
            Space Explorer
          </motion.h1>
        </motion.section>

        {/* Skills Section */}
        <motion.section className="mb-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: FaReact, name: 'React', color: 'cyan' },
            { icon: FaNodeJs, name: 'Node.js', color: 'green' },
            { icon: FaPython, name: 'Python', color: 'yellow' },
            { icon: FaJs, name: 'JavaScript', color: 'purple' }
          ].map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.1, rotateZ: 5 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all"
            >
              <motion.div animate={floatingAnimation}>
                <skill.icon className={`w-12 h-12 mx-auto mb-4 text-${skill.color}-400`} />
                <p className="text-white/90 font-medium">{skill.name}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.section>

        {/* Projects Section */}
        <motion.section className="mb-20 space-y-8">
          {[1, 2].map((_, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500" />
                <div>
                  <h3 className="text-xl font-semibold text-white/90">Cosmic Project {index + 1}</h3>
                  <p className="text-white/60">A journey through the digital universe</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Contact Form */}
        <motion.section className="max-w-md mx-auto">
          <form 
            action="mailto:khoirulmustofa767@gmail.com"
            method="post"
            encType="text/plain"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-lg border border-white/10 focus:border-white/20 text-white placeholder-white/50 transition-all"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-lg border border-white/10 focus:border-white/20 text-white placeholder-white/50 transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium hover:opacity-90 transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default About;