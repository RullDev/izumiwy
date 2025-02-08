
import React from "react";
import Profile from "./components/Profile";
import Links from "./components/Links";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen font-sans transition-colors duration-300">
      <Header />
      <main>
        <div className="flex flex-col items-center justify-center px-4 py-20">
          <Profile />
          <Links />
        </div>
      </main>
    </div>
  );
}

export default App;
