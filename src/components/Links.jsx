
import React from "react";
import { FaSpotify, FaCheckCircle } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const links = [
  { title: "Personal Website", description: "About me.", url: "#", icon: "🌐", verified: true },
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
          className={`flex items-center justify-between p-3 bg-white/5 backdrop-blur-sm hover:bg-white/10 ${link.isSpotify ? 'rounded-full' : 'rounded-lg'} transition-colors duration-300 cursor-pointer group`}
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
                <div className="flex items-center">
                  <div>
                    <h3 className="text-sm font-medium flex items-center">
                      {link.title}
                      {link.verified && <FaCheckCircle className="text-blue-500 ml-1 text-xs" />}
                    </h3>
                    <p className="text-xs text-gray-400">{link.description}</p>
                  </div>
                </div>
              </div>
              <HiArrowRight className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            </>
          )}
        </a>
      ))}
    </div>
  );
};

export default Links;
