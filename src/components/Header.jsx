
import React from "react";
import { Menu } from '@headlessui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const [isDark, setIsDark] = React.useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center bg-white/5 backdrop-blur-sm">
      <div className="text-xl font-semibold">Natsumi</div>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all transform hover:scale-105"
      >
        <div className="relative w-6 h-6">
          <FaSun className={`absolute transition-all duration-300 ${isDark ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
          <FaMoon className={`absolute transition-all duration-300 ${isDark ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'}`} />
        </div>
      </button>
    </div>
  );
};

export default Header;
