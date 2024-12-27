"use client";
import { useState } from "react";
import Sidebar from '../components/Sidebar';
import AppCard from '../components/AppCard';
import Leaderboard from '../components/Leaderboard';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div>
        <Sidebar />
      </div>

      <div className="w-full">
        <div className="bg-[#fef2d8] bg-opacity-60 backdrop-blur-md p-6 shadow-sm flex justify-between items-center">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            {/* <span className="text-xl">Welcome, User!</span> */}
            <div className="text-center flex flex-row space-x-4 items-center justify-center">
              <img
                src="/wallpaper.png"
                alt="User Profile"
                className="w-12 h-12 rounded-full mx-auto"
              />
              <p className="text-lg font-medium">John Samuel</p>
            </div>
          </div>
        </div>

        <div className="py-10 px-6 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <AppCard />
          </div>

          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-lg">
            <Leaderboard />
          </div>
        </div>
      </div>
    </div>
  );
}
