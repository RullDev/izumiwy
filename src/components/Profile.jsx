import React from "react";
import { FaInstagram, FaSpotify, FaGithub, FaCircle } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="text-center mt-[-50px]">
      <img 
        src="" 
        alt="Profile" 
        className="w-24 h-24 rounded-full border-4 border-black mx-auto"
      />
      <h1 className="text-xl font-bold mt-2">Natsumi つ内 <FaCircle className="inline text-blue-500" /></h1>
      <p className="text-gray-400 text-sm">あなたが行くなら、私はここに残る。</p>
      <div className="flex justify-center gap-3 mt-3">
        <button className="bg-gray-800 px-3 py-1 rounded-full text-xs">Ngoding</button>
        <button className="bg-gray-800 px-3 py-1 rounded-full text-xs">Turu</button>
        <button className="bg-gray-800 px-3 py-1 rounded-full text-xs">Anime</button>
        <button className="bg-gray-800 px-3 py-1 rounded-full text-xs">Music</button>
      </div>
      <div className="flex justify-center gap-4 mt-4 text-2xl text-gray-400">
        <FaInstagram />
        <FaSpotify />
        <FaGithub />
      </div>
    </div>
  );
};

export default Profile;
