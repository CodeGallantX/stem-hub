"use client";
import { useState } from "react";
import { FaPlay, FaTrophy, FaUser } from "react-icons/fa";
import Link from "next/link";

export default function MathQuest() {
  const [adventureHover, setAdventureHover] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      <header className="flex justify-between items-center bg-gray-900 px-6 py-4 shadow-lg">
        <h1 className="text-3xl font-extrabold tracking-wider text-yellow-400">MathQuest</h1>
        <nav className="flex space-x-6">
          <Link href="#adventure-map" className="hover:text-yellow-400 transition">
            Adventure Map
          </Link>
          <Link href="#leaderboard" className="hover:text-yellow-400 transition">
            Leaderboard
          </Link>
          <Link href="#profile" className="hover:text-yellow-400 transition">
            Profile
          </Link>
          <Link href="/dashboard" className="hover:text-yellow-400 transition">
            Dashboard
          </Link>
        </nav>
      </header>

      <section className="relative text-center py-20 px-6">
        <div className="absolute inset-0 bg-[url('/images/adventure-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-yellow-400 mb-4">
            Embark on a Math Adventure!
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Solve puzzles, defeat bosses, and explore the magical world of MathQuest.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-full text-lg font-bold transition">
            <FaPlay className="inline-block mr-2" />
            Start Quest
          </button>
        </div>
      </section>

      <section
        id="adventure-map"
        className="py-16 px-6 text-center bg-gradient-to-t from-gray-900 via-gray-800 to-black"
      >
        <h3 className="text-3xl font-bold text-yellow-400 mb-8">Adventure Map</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["Forest", "Cave", "Castle", "Mountain", "Ocean", "Sky Temple"].map(
            (location, index) => (
              <div
                key={index}
                onMouseEnter={() => setAdventureHover(true)}
                onMouseLeave={() => setAdventureHover(false)}
                className={`relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transform ${
                  adventureHover ? "scale-105" : "scale-100"
                } transition duration-300`}
              >
                <img
                  src={`/images/${location.toLowerCase().replace(" ", "-")}.jpg`}
                  alt={location}
                  className="w-full h-40 object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <h4 className="text-xl font-bold text-yellow-400">{location}</h4>
                </div>
              </div>
            )
          )}
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
                {[
                  { rank: 1, name: "KnightCoder", score: 1200 },
                  { rank: 2, name: "MathMage", score: 1150 },
                  { rank: 3, name: "NumberNinja", score: 1100 },
                ].map((player, index) => (
                  <tr key={index} className="border-t border-gray-700">
                    <td className="py-2">{player.rank}</td>
                    <td className="py-2">{player.name}</td>
                    <td className="py-2">{player.score}</td>
                  </tr>
                ))}
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
