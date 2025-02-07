
import React from "react";
import Profile from "./components/Profile";
import Links from "./components/Links";
import "./App.css";

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <main className="flex flex-col items-center justify-center px-4 py-10">
        <Profile />
        <Links />
      </main>
    </div>
  );
}

export default App;
