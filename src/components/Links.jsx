
import React from "react";
import { FaSpotify } from "react-icons/fa";

const links = [
  { title: "Personal Website", description: "About me.", url: "#", icon: "🌐" },
  { title: "Character.ai RestAPI", description: "Documentation for Character.ai API.", url: "#", icon: "🔥" },
  { title: "WhatsApp Bot", description: "Natsumi Bot WhatsApp.", url: "#", icon: "💬" },
  { title: "WhatsApp Channel", description: "Channel about Natsumi Bot.", url: "#", icon: "📢" },
  { title: "Spotify", description: "See what I'm currently listening to", url: "#", icon: <FaSpotify className="text-green-500" /> }
];

const Links = () => {
  return (
    <div className="w-full max-w-md mt-6 space-y-3">
      {links.map((link, index) => (
        <a 
          key={index}
          href={link.url}
          className="flex items-center space-x-3 p-3 bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-lg transition-colors duration-300 cursor-pointer"
        >
          <span className="text-xl">{typeof link.icon === 'string' ? link.icon : link.icon}</span>
          <div>
            <h3 className="text-sm font-medium">{link.title}</h3>
            <p className="text-xs text-gray-400">{link.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Links;
