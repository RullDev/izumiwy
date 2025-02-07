import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Links from "./components/Links";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
      <main className="flex flex-col items-center justify-center px-4 py-6">
        <Profile />
        <Links />
      </main>
      <Footer />
    </div>
  );
}

export default App;
