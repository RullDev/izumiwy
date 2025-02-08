import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [isDark, setIsDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="p-4 bg-white/10 dark:bg-black/10 backdrop-blur-sm border-b border-gray-200/10 dark:border-gray-800/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="text-xl font-semibold hover:opacity-80 transition-opacity">
            Natsumi
          </a>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="relative w-14 h-7 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <div
                className={`absolute top-1 left-1 w-5 h-5 rounded-full transform transition-all duration-500 flex items-center justify-center
                ${isDark ? 'translate-x-7 bg-gray-800' : 'translate-x-0 bg-yellow-400'} shadow-lg`}
              >
                {isDark ? (
                  <FaMoon size={12} className="text-yellow-400 animate-pulse" />
                ) : (
                  <FaSun size={12} className="text-white animate-spin-slow" />
                )}
              </div>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-white/5 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <div className={`transform transition-all duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
                {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </div>
            </button>
          </div>
        </div>

        <div
          className={`absolute top-full left-0 right-0 bg-white/10 dark:bg-black/10 backdrop-blur-sm transform transition-all duration-300
          ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}
        >
          <div className="max-w-7xl mx-auto p-4">
            <a
              href="/about"
              className="block px-4 py-3 rounded-lg hover:bg-white/5 transition-all text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              About Me
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;