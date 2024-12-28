"use client";

import { useState } from "react";
import Link from "next/link";
import { FaUserCircle, FaTrophy } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import Leaderboard from "../components/Leaderboard";
import AppCard from "../components/AppCard";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`bg-[#f28d1c] text-white ${
          sidebarOpen ? "w-64" : "w-20"
        } min-h-screen transition-all duration-300`}
      >
        {/* Logo & Toggle */}
        <div className="flex items-center justify-between p-4 bg-[#7f4b23]">
          <Link href="/" className="text-2xl font-bold font-outfit text-white">
            {sidebarOpen ? (
              <>
                STEM<span className="text-[#e76f51]">Hub</span>
              </>
            ) : (
              <span className="text-[#e76f51]">S</span>
            )}
          </Link>
          <button
            className="text-white text-2xl"
            onClick={handleToggleSidebar}
          >
            <FaAngleLeft
              className={`transition-transform duration-300 ${
                sidebarOpen ? "rotate-0" : "-rotate-180"
              }`}
            />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="mt-10 space-y-4">
          <Link
            href="/dashboard"
            className={`block py-3 px-4 flex items-center space-x-4 rounded-lg hover:bg-[#d4af37] transition ${
              sidebarOpen ? "justify-start" : "justify-center"
            }`}
          >
            <FaTrophy className="text-2xl" />
            {sidebarOpen && <span className="text-lg">Dashboard</span>}
          </Link>
          <Link
            href="/profile"
            className={`block py-3 px-4 flex items-center space-x-4 rounded-lg hover:bg-[#d4af37] transition ${
              sidebarOpen ? "justify-start" : "justify-center"
            }`}
          >
            <FaUserCircle className="text-2xl" />
            {sidebarOpen && <span className="text-lg">Profile</span>}
          </Link>
          <Link
            href="/"
            className={`block py-3 px-4 flex items-center space-x-4 rounded-lg hover:bg-[#d4af37] transition ${
              sidebarOpen ? "justify-start" : "justify-center"
            }`}
          >
            <FaUserCircle className="text-2xl" />
            {sidebarOpen && <span className="text-lg">Log Out</span>}
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-700">Welcome to STEMHub</h1>
          <div className="flex items-center space-x-4">
            <img
              src="/profile-image.png" // Replace with a valid image
              alt="User Profile"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="text-lg font-semibold text-gray-800">John Samuel</p>
              <p className="text-sm text-gray-500">Frontend Developer</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Apps Section */}
          <div className="lg:col-span-2">
            <AppCard />
          </div>

          {/* Leaderboard Section */}
          <div className="lg:col-span-1">
            <Leaderboard />
          </div>
        </div>
      </div>
    </div>
  );
}