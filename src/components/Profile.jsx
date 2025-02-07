
import React from "react";
import { FaInstagram, FaSpotify, FaGithub, FaCircle } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
      <div className="text-center">
        <div className="inline-block">
          <img
            src=""
            alt="Profile"
            className="w-20 h-20 rounded-full border-2 border-white/20 bg-gray-600"
            onError={(e) => {
              e.target.innerText = 'NA';
            }}
          />
        </div>
        <h1 className="text-lg font-bold mt-2">Natsumi つ内 <FaCircle className="inline text-blue-500" /></h1>
        <p className="text-gray-400 text-xs">あなたが行くなら、私はここに残る。</p>
        <div className="flex justify-center gap-2 mt-3">
          <button className="bg-white/5 px-3 py-1 rounded-full text-xs hover:bg-white/10 transition-colors">Ngoding</button>
          <button className="bg-white/5 px-3 py-1 rounded-full text-xs hover:bg-white/10 transition-colors">Turu</button>
          <button className="bg-white/5 px-3 py-1 rounded-full text-xs hover:bg-white/10 transition-colors">Anime</button>
          <button className="bg-white/5 px-3 py-1 rounded-full text-xs hover:bg-white/10 transition-colors">Music</button>
        </div>
        <div className="flex justify-center gap-4 mt-4 text-xl text-gray-400">
          <FaInstagram className="cursor-pointer hover:text-white transition-colors" />
          <FaSpotify className="cursor-pointer hover:text-white transition-colors" />
          <FaGithub className="cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
