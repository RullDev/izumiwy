
import React from "react";
import { FaInstagram, FaSpotify, FaGithub } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="bg-white/10 dark:bg-white/5 backdrop-blur-lg p-6 rounded-lg border border-gray-200/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 shadow-lg">
      <div className="text-center">
        <div className="inline-block relative">
          <img
            src=""
            alt="Profile"
            className="w-20 h-20 rounded-full border-2 border-white/20 bg-gray-600 transition-transform hover:scale-105"
            onError={(e) => {
              e.target.innerText = 'NA';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
        </div>
        <h1 className="text-lg font-bold mt-2">Natsumi つ内</h1>
        <p className="text-gray-400 text-xs">あなたが行くなら、私はここに残る。</p>
        <div className="flex justify-center gap-2 mt-3">
          <button className="bg-white/5 px-3 py-1 rounded-full text-xs hover:bg-white/10 transition-all hover:scale-105">Ngoding</button>
          <button className="bg-white/5 px-3 py-1 rounded-full text-xs hover:bg-white/10 transition-all hover:scale-105">Turu</button>
          <button className="bg-white/5 px-3 py-1 rounded-full text-xs hover:bg-white/10 transition-all hover:scale-105">Anime</button>
          <button className="bg-white/5 px-3 py-1 rounded-full text-xs hover:bg-white/10 transition-all hover:scale-105">Music</button>
        </div>
        <div className="flex justify-center gap-4 mt-4 text-xl text-gray-400">
          <FaInstagram className="cursor-pointer hover:text-white transition-colors hover:-translate-y-1 transform transition-transform" />
          <FaSpotify className="cursor-pointer hover:text-white transition-colors hover:-translate-y-1 transform transition-transform" />
          <FaGithub className="cursor-pointer hover:text-white transition-colors hover:-translate-y-1 transform transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
