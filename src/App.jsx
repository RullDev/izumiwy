
import React from "react";
import Profile from "./components/Profile";
import Links from "./components/Links";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans dark:bg-gray-900">
      <Header />
      <div className="flex">
        <div className="hidden md:block w-64 fixed h-screen bg-white/5 backdrop-blur-sm border-r border-white/10">
          <div className="p-4 mt-16">
            <h2 className="text-lg font-semibold">Sidebar</h2>
          </div>
        </div>
        <main className="flex-1 md:ml-64">
          <div className="flex flex-col items-center justify-center px-4 py-20">
            <Profile />
            <Links />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
