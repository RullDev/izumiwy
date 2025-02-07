
import React from "react";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

const Header = () => {
  return (
    <header className="relative h-40 w-full">
      <NavigationMenu.Root className="absolute top-4 right-4 z-10">
        <NavigationMenu.List className="flex gap-4">
          <NavigationMenu.Item>
            <NavigationMenu.Link 
              className="text-white hover:text-gray-300 transition-colors"
              href="#home"
            >
              Home
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link 
              className="text-white hover:text-gray-300 transition-colors"
              href="#about"
            >
              About
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
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
