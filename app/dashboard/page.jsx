"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Leaderboard from "../components/Leaderboard";
import AppCard from "../components/AppCard";

export default function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div>
      <Sidebar sidebarOpen={sidebarOpen} handleToggleSidebar={handleToggleSidebar} />
      </div>

      <div className="flex-1 p-6">
        <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-700">Howdy, scholar!</h1>
          <div className="flex items-center space-x-4">
            <img
              src="/wallpaper.png"
              alt="User Profile"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="text-lg font-semibold text-gray-800">John Samuel</p>
              <p className="text-sm text-gray-500">Frontend Developer</p>
            </div>
          </div>
        </div>

        <div className="py-10 grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AppCard />
          </div>

          <div className="lg:col-span-1 hidden xl:block">
            <Leaderboard />
          </div>
        </div>
      </div>
    </div>
  );
}