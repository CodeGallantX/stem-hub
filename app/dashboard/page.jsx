"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaUserCircle, FaTrophy, FaChartLine } from "react-icons/fa"; // Added FaChartLine for mock chart

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-[#f28d1c] text-white w-64 h-full transition-all ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ transition: "transform 0.3s ease" }}
      >
        <div className="flex items-center justify-between p-6 bg-[#7f4b23]">
          <img src="/logo.svg" alt="STEMHub Logo" className="w-12" />
          <button
            className="text-white text-2xl"
            onClick={handleToggleSidebar}
          >
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="mt-8 p-6 text-center">
          <img
            src="/profile.jpg"
            alt="User Profile"
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />
          <p className="text-xl font-semibold">User Name</p>
        </div>

        <div className="mt-10 space-y-6 px-6">
          <Link
            href="/dashboard"
            className="block py-2 px-4 rounded-lg text-lg hover:bg-[#d4af37] transition flex items-center"
          >
            <FaTrophy className="mr-2" /> Dashboard
          </Link>
          <Link
            href="/stem-explorer"
            className="block py-2 px-4 rounded-lg text-lg hover:bg-[#d4af37] transition flex items-center"
          >
            <FaUserCircle className="mr-2" /> STEM Explorer
          </Link>
          <Link
            href="/biobuilder"
            className="block py-2 px-4 rounded-lg text-lg hover:bg-[#d4af37] transition flex items-center"
          >
            <FaUserCircle className="mr-2" /> BioBuilder
          </Link>
          <Link
            href="/build-a-bridge"
            className="block py-2 px-4 rounded-lg text-lg hover:bg-[#d4af37] transition flex items-center"
          >
            <FaUserCircle className="mr-2" /> Build-A-Bridge
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Banner */}
        <div className="bg-[#fef2d8] p-6 shadow-md flex justify-between items-center">
          <h1 className="text-3xl font-bold">STEMHub Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-xl">Welcome, User!</span>
            <Link
              href="/profile"
              className="bg-[#b87f42] px-4 py-2 rounded-full text-white hover:bg-[#9a6c3d] transition"
            >
              Profile
            </Link>
          </div>
        </div>

        {/* Content Area */}
        <div className="py-10 px-6 max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Section: Main Cards */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-[#7f4b23] mb-4">STEM Explorer</h3>
              <p className="text-lg text-[#6a3d29] mb-6">
                Interactive simulations for physics, chemistry, and math concepts.
              </p>
              <Link
                href="stem-explorer/"
                className="bg-[#b87f42] text-white py-2 px-4 rounded-lg hover:bg-[#9a6c3d] transition"
              >
                Explore
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-[#7f4b23] mb-4">BioBuilder</h3>
              <p className="text-lg text-[#6a3d29] mb-6">
                Gamified exploration of human anatomy with interactive learning.
              </p>
              <Link
                href="/biobuilder"
                className="bg-[#b87f42] text-white py-2 px-4 rounded-lg hover:bg-[#9a6c3d] transition"
              >
                Explore
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-[#7f4b23] mb-4">Build-A-Bridge</h3>
              <p className="text-lg text-[#6a3d29] mb-6">
                Design bridges and test them with real-time physics simulations.
              </p>
              <Link
                href="/build-a-bridge"
                className="bg-[#b87f42] text-white py-2 px-4 rounded-lg hover:bg-[#9a6c3d] transition"
              >
                Explore
              </Link>
            </div>

            {/* Mock Chart or Calendar */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-[#7f4b23] mb-4">Monthly Activity Overview</h3>
              <div className="bg-[#f0f0f0] h-64 flex justify-center items-center">
                <p className="text-lg">Mock Chart or Calendar</p>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Leaderboard */}
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#7f4b23] mb-4">Leaderboard</h3>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>1. John Doe</span>
                <span className="font-semibold">150 points</span>
              </li>
              <li className="flex justify-between">
                <span>2. Jane Smith</span>
                <span className="font-semibold">140 points</span>
              </li>
              <li className="flex justify-between">
                <span>3. Alice Brown</span>
                <span className="font-semibold">130 points</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
