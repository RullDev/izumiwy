
import React from "react";

const links = [
  { title: "Personal Website", description: "About me.", url: "#", icon: "🌐" },
  { title: "Character.ai RestAPI", description: "Documentation for Character.ai API.", url: "#", icon: "🔥" },
  { title: "WhatsApp Bot", description: "Natsumi Bot WhatsApp.", url: "#", icon: "💬" },
  { title: "WhatsApp Channel", description: "Channel about Natsumi Bot.", url: "#", icon: "📢" },
];

const Links = () => {
  return (
    <div className="w-full max-w-md mt-6 space-y-4">
      {links.map((link, index) => (
        <a 
          key={index}
          href={link.url}
          className="flex items-center justify-between p-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow-md transition-colors duration-300 cursor-pointer"
        >
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{link.icon}</span>
            <div>
              <h3 className="text-lg font-medium">{link.title}</h3>
              <p className="text-sm text-gray-400">{link.description}</p>
            </div>
          </div>
          <span className="text-gray-400">➔</span>
        </a>
      ))}
    </div>
  );
};

export default Links;
