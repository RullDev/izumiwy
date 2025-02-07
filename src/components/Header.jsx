
import React from "react";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

const Header = () => {
  return (
    <header className="relative h-40 w-full">
      <NavigationMenu.Root>
        <NavigationMenu.List className="absolute top-4 right-4 z-10 flex gap-4 p-2 rounded-lg bg-gray-800/50">
          <NavigationMenu.Item>
            <NavigationMenu.Link asChild>
              <a href="#home" className="text-white hover:text-gray-300 transition-colors">
                Home
              </a>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link asChild>
              <a href="#about" className="text-white hover:text-gray-300 transition-colors">
                About
              </a>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Indicator />
          <NavigationMenu.Viewport />
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
