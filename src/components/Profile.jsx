
import React from "react";
import * as Avatar from '@radix-ui/react-avatar';
import { FaInstagram, FaSpotify, FaGithub, FaCircle } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="text-center mt-[-50px]">
      <Avatar.Root className="inline-flex">
        <Avatar.Image
          src=""
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-black"
        />
        <Avatar.Fallback className="w-24 h-24 rounded-full border-4 border-black bg-gray-600 flex items-center justify-center">
          NA
        </Avatar.Fallback>
      </Avatar.Root>
      <h1 className="text-xl font-bold mt-2">Natsumi つ内 <FaCircle className="inline text-blue-500" /></h1>
      <p className="text-gray-400 text-sm">あなたが行くなら、私はここに残る。</p>
      <div className="flex justify-center gap-3 mt-3">
        <button className="bg-gray-800 px-3 py-1 rounded-full text-xs hover:bg-gray-700 transition-colors">Ngoding</button>
        <button className="bg-gray-800 px-3 py-1 rounded-full text-xs hover:bg-gray-700 transition-colors">Turu</button>
        <button className="bg-gray-800 px-3 py-1 rounded-full text-xs hover:bg-gray-700 transition-colors">Anime</button>
        <button className="bg-gray-800 px-3 py-1 rounded-full text-xs hover:bg-gray-700 transition-colors">Music</button>
      </div>
      <div className="flex justify-center gap-4 mt-4 text-2xl text-gray-400">
        <FaInstagram className="cursor-pointer hover:text-white transition-colors" />
        <FaSpotify className="cursor-pointer hover:text-white transition-colors" />
        <FaGithub className="cursor-pointer hover:text-white transition-colors" />
      </div>
    </div>
  );
};

export default Profile;
