
import React from "react";
import { Menu } from '@headlessui/react';

const Header = () => {
  return (
    <header className="relative h-40 w-full">
      <Menu as="div" className="absolute top-4 right-4 z-10">
        <div className="flex gap-4 p-2 rounded-lg bg-gray-800/50">
          <Menu.Item>
            <a href="#home" className="text-white hover:text-gray-300 transition-colors">
              Home
            </a>
          </Menu.Item>
          <Menu.Item>
            <a href="#about" className="text-white hover:text-gray-300 transition-colors">
              About
            </a>
          </Menu.Item>
        </div>
      </Menu>
      <img 
        src="" 
        alt="Header Background" 
        className="object-cover w-full h-full grayscale brightness-75" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
    </header>
  );
};

export default Header;
