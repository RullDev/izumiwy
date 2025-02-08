
import React from "react";
import { FaSpotify } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const links = [
  { title: "Personal Website", description: "About me.", url: "#", icon: "🌐" },
  { title: "Character.ai RestAPI", description: "Documentation for Character.ai API.", url: "#", icon: "🔥" },
  { title: "WhatsApp Bot", description: "Natsumi Bot WhatsApp.", url: "#", icon: "💬" },
  { title: "WhatsApp Channel", description: "Channel about Natsumi Bot.", url: "#", icon: "📢" },
  { 
    title: "Currently Playing", 
    isSpotify: true,
    songTitle: "No song playing",
    artist: "No artist",
    albumArt: "https://via.placeholder.com/40",
    url: "#"
  }
];

const Links = () => {
  return (
    <div className="w-full max-w-md mt-6 space-y-3">
      {links.map((link, index) => (
        <a 
          key={index}
          href={link.url}
          className={`flex items-center justify-between p-3 bg-white/5 backdrop-blur-sm hover:bg-white/10 ${link.isSpotify ? 'rounded-full' : 'rounded-lg'} transition-all duration-300 cursor-pointer group hover:translate-x-1`}
        >
          {link.isSpotify ? (
            <>
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10">
                  <img src={link.albumArt} alt="Album Art" className="rounded-full" />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-sm font-medium">{link.songTitle}</h3>
                  <p className="text-xs text-gray-400">{link.artist}</p>
                </div>
              </div>
              <FaSpotify className="text-green-500 text-xl" />
            </>
          ) : (
            <>
              <div className="flex items-center space-x-3">
                <span className="text-lg">{link.icon}</span>
                <div>
                  <h3 className="text-sm font-medium">{link.title}</h3>
                  <p className="text-xs text-gray-400">{link.description}</p>
                </div>
              </div>
              <HiArrowRight className="text-gray-400 text-sm" />
            </>
          )}
        </a>
      ))}
    </div>
  );
};

export default Links;
