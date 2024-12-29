"use client";
import { useState } from "react";
import Link from 'next/link';
import { HiMenuAlt4 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { FaPlay, FaLock } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import adventureScenes from "../../../data/mathquest/scenes.json";

export default function MathQuest() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [completedScenes, setCompletedScenes] = useState(0);


  const handleCompleteScene = () => {
    setCompletedScenes((prev) => Math.min(prev + 1, adventureScenes.length), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black animate-gradient text-white">
      {/* Header */}
      <header className="z-20 fixed w-full flex justify-between items-center bg-gray-900 px-8 lg:px-14 py-4 shadow-lg">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider text-yellow-400">MathQuest</h1>
        <nav className="hidden lg:flex items-center space-x-6">
          <Link href="#adventure-map" className="hover:text-yellow-400 transition">
            Adventure Map
          </Link>
          <Link href="#leaderboard" className="hover:text-yellow-400 transition">
            Leaderboard
          </Link>
          <Link href="#profile" className="hover:text-yellow-400 transition">
            Profile
          </Link>
          <Link
            href="/dashboard"
            className="bg-yellow-400 px-4 py-2 rounded-full text-gray-800 flex items-center space-x-2 hover:bg-yellow-500 transition"
          >
            <MdDashboard /> <span>Dashboard</span>
          </Link>
        </nav>
        <button onClick={toggleSidebar} className="lg:hidden text-3xl text-white">
          <HiMenuAlt4 />
        </button>
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-md"
            onClick={toggleSidebar}
          ></div>
        )}

        <div
          className={`fixed inset-0 z-50 bg-gray-900 bg-opacity-50 text-white flex flex-col items-center justify-center transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out`}
        >
          <button onClick={toggleSidebar} className="absolute top-6 right-6 text-white text-3xl">
            <IoMdClose />
          </button>
          <nav className="flex flex-col items-center space-y-8 text-lg">
            <Link href="#adventure-map" onClick={toggleSidebar} className="hover:text-yellow-400 transition">
              Adventure Map
            </Link>
            <Link href="#leaderboard" onClick={toggleSidebar} className="hover:text-yellow-400 transition">
              Leaderboard
            </Link>
            <Link href="#profile" onClick={toggleSidebar} className="hover:text-yellow-400 transition">
              Profile
            </Link>
            <Link
              href="/dashboard"
              onClick={toggleSidebar}
              className="bg-yellow-400 px-4 py-2 rounded-full text-gray-800 flex items-center space-x-2 hover:bg-yellow-500 transition"
            >
              <MdDashboard /> <span>Dashboard</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative text-center py-40 px-6">
        <div className="absolute inset-0 bg-[url('/images/adventure-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-yellow-400 mb-4">
            Embark on a Math Adventure!
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Solve puzzles, defeat bosses, and explore the magical world of MathQuest.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-full text-lg font-bold transition">
            <FaPlay className="inline-block mr-2 " />
            Start Quest
          </button>
        </div>
      </section>

      {/* Adventure Map */}
      <section
        id="adventure-map"
        className="py-16 px-6 text-center bg-gradient-to-t from-gray-900 via-gray-800 to-black"
      >
        <h3 className="text-3xl font-bold text-yellow-400 mb-8">Adventure Map</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {adventureScenes.map((scene, index) => (
            <div
              key={index}
              className={`relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 ${index <= completedScenes ? "scale-100" : "scale-95 opacity-50"
                }`}
            >
              <img
                src={scene.img}
                alt={scene.name}
                className="w-full h-56 object-cover"
              />
              <div
                className={`absolute inset-0 flex items-center justify-center ${index > completedScenes ? "bg-black bg-opacity-60" : "bg-black bg-opacity-40"
                  }`}
              >
                <h4 className="text-xl font-bold text-yellow-400 p-2 bg-gray-900 rounded-md">{scene.name}</h4>
                {index > completedScenes && (
                  <FaLock className="text-yellow-400 text-[8rem] absolute" />
                )}
              </div>
              <button
                className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold ${index === completedScenes ? "block" : "hidden"
                  }`}
                onClick={handleCompleteScene}
              >
                Start
              </button>
            </div>
          ))}
        </div>
      </section>

      <section
        id="leaderboard"
        className="py-16 px-6 bg-gray-900 text-center text-yellow-400"
      >
        <h3 className="text-3xl font-bold mb-8">Leaderboard</h3>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <table className="w-full text-left text-yellow-400">
              <thead>
                <tr>
                  <th className="pb-2">Rank</th>
                  <th className="pb-2">Player</th>
                  <th className="pb-2">Score</th>
                </tr>
              </thead>
              <tbody>
                {[{ rank: 1, name: "KnightCoder", score: 1200 }].map(
                  (player, index) => (
                    <tr key={index} className="border-t border-gray-700">
                      <td className="py-2">{player.rank}</td>
                      <td className="py-2">{player.name}</td>
                      <td className="py-2">{player.score}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section
        id="profile"
        className="py-16 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-center"
      >
        <h3 className="text-3xl font-bold text-yellow-400 mb-8">Player Profile</h3>
        <div className="flex flex-col items-center space-y-4">
          <img
            src="/images/player-avatar.png"
            alt="Player Avatar"
            className="w-32 h-32 rounded-full border-4 border-yellow-400"
          />
          <h4 className="text-xl font-bold">John Samuel</h4>
          <p className="text-gray-300">Level: 15 | Role: Math Warrior</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 text-center text-gray-500">
        <p className="text-sm">
          © 2024 MathQuest | A gamified way to master mathematics.
        </p>
      </footer>
    </div>
  );
}
