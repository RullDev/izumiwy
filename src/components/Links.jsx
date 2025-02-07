
import React from "react";
import { Card } from 'radix-ui';

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
        <Card.Root 
          key={index} 
          asChild
        >
          <a 
            href={link.url}
            className="flex items-center justify-between p-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow-md transition-colors duration-300 cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{link.icon}</span>
              <div>
                <Card.Title className="text-lg font-medium">{link.title}</Card.Title>
                <Card.Description className="text-sm text-gray-400">{link.description}</Card.Description>
              </div>
            </div>
            <span className="text-gray-400">➔</span>
          </a>
        </Card.Root>
      ))}
    </div>
  );
};

export default Links;
