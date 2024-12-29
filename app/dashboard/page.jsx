"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Leaderboard from "../components/Leaderboard";
import AppCard from "../components/AppCard";
import { FaBell } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Dashboard() {

  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div>
        <button className="text-gray-800 text-2xl absolute left-2 top-5 p-1 bg-gray-300 rounded-full text-gray-500 font-bold cursor-pointer block md:hidden"
            onClick={handleToggleSidebar}>
            <FaAngleLeft className={`transition-transform duration-300 ${sidebarOpen ? "rotate-0" : "-rotate-180"}`} />
        </button>
      </div>
      <div className="hidden md:block">
        <Sidebar sidebarOpen={sidebarOpen} handleToggleSidebar={handleToggleSidebar} />
      </div>

      <div className="flex-1 p-6">
        <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
          <h1 className="text-xl md:text-3xl font-bold text-gray-700 ">Howdy, scholar!</h1>
          <div className="flex items-center space-x-4">
            <FaBell
              onClick={() => (router.push('/notifications'))}
            className="text-2xl text-gray-500 cursor-pointer inline-block md:hidden" />
            <img
              src="/wallpaper.png"
              alt="User Profile"
              className="w-12 h-12 rounded-full"
            />
            <div className="hidden md:inline-block">
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