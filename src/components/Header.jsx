import React from "react";

const Header = () => {
  return (
    <header className="relative h-40 w-full">
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
