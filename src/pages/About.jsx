import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaReact, FaNodeJs, FaPython, FaJs } from 'react-icons/fa';

const About = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const skills = [
    { icon: FaReact, name: 'React', color: '#61DAFB' },
    { icon: FaNodeJs, name: 'Node.js', color: '#68A063' },
    { icon: FaPython, name: 'Python', color: '#FFD43B' },
    { icon: FaJs, name: 'JavaScript', color: '#F7DF1E' }
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 via-gray-900 to-black pt-20"
    >
      {/* Animated Stars */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{ opacity: Math.random(), scale: Math.random() }}
            animate={{
              y: ['0vh', '100vh'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `-5vh`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Profile Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="relative w-32 h-32 mx-auto mb-8"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse" />
            <div className="absolute inset-1 rounded-full bg-black" />
            <img
              src="your-profile-image-url"
              alt="Profile"
              className="absolute inset-2 w-28 h-28 rounded-full object-cover"
            />
          </motion.div>

          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
            Space Explorer
          </h1>

          <div className="text-lg text-gray-300 mb-8">
            <Typewriter
              options={{
                strings: [
                  "Hello, I'm a passionate developer...",
                  "I create stunning web experiences...",
                  "Let's build something amazing together..."
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30
              }}
            />
          </div>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-invert mx-auto mb-16 backdrop-blur-lg bg-white/5 p-6 rounded-xl border border-white/10"
        >
          <div className="space-y-4 text-gray-300">
            <p>
              I'm a passionate developer exploring the vast universe of code. With a strong foundation in both frontend and backend technologies, I create digital experiences that leave a lasting impression.
            </p>
            <p>
              When I'm not coding, you can find me stargazing, learning new technologies, or contributing to open-source projects. I believe in continuous learning and pushing the boundaries of what's possible.
            </p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="p-4 backdrop-blur-lg bg-white/5 rounded-xl border border-white/10 flex flex-col items-center"
            >
              <skill.icon className="w-10 h-10 mb-2" style={{ color: skill.color }} />
              <span className="text-sm text-gray-300">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;