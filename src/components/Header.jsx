
import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isDark, setIsDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const menuVariants = {
    open: { height: "auto", opacity: 1 },
    closed: { height: 0, opacity: 0 }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="p-4 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white hover:opacity-80 transition-all">
            Natsumi
          </Link>

          <div className="flex items-center gap-4">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="relative w-14 h-7 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
            >
              <div
                className={`absolute top-1 left-1 w-5 h-5 rounded-full transform transition-all duration-500 flex items-center justify-center
                ${isDark ? 'translate-x-7 bg-gray-800' : 'translate-x-0 bg-yellow-400'}`}
              >
                {isDark ? (
                  <FaMoon size={12} className="text-yellow-400" />
                ) : (
                  <FaSun size={12} className="text-white" />
                )}
              </div>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            >
              <div className="flex flex-col gap-1.5">
                <span className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </motion.button>
          </div>
        </div>

        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="py-4 space-y-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-lg ${location.pathname === '/' ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-800'} transition-all`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-lg ${location.pathname === '/about' ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-800'} transition-all`}
            >
              About
            </Link>
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
