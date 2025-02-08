
import React, { useState } from "react";
import { FaSun, FaMoon } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [isDark, setIsDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="p-4 bg-white/10 dark:bg-black/10 backdrop-blur-sm border-b border-gray-200/10 dark:border-gray-800/10">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold">Natsumi</div>
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative w-14 h-7 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
            >
              <div
                className={`absolute top-1 left-1 w-5 h-5 rounded-full transform transition-transform duration-300 flex items-center justify-center
                ${isDark ? 'translate-x-7 bg-gray-800' : 'translate-x-0 bg-yellow-400'}`}
              >
                {isDark ? <FaMoon size={12} className="text-yellow-400" /> : <FaSun size={12} className="text-white" />}
              </div>
            </button>
            
            {/* Hamburger */}
            <button
              onClick={toggleMenu}
              className="relative w-8 h-8 flex items-center justify-center"
            >
              <div className={`transform transition-all duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 right-0 bg-white/10 dark:bg-black/10 backdrop-blur-sm transform transition-all duration-300 border-b border-gray-200/10 dark:border-gray-800/10
          ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
        >
          <nav className="p-4">
            <ul className="space-y-4">
              <li>
                <a href="#" className="block px-4 py-2 rounded-lg hover:bg-white/5 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 rounded-lg hover:bg-white/5 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 rounded-lg hover:bg-white/5 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 rounded-lg hover:bg-white/5 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
