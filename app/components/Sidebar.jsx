"use client";
import { useState } from "react";
import Link from "next/link";
import { FaUserCircle, FaTrophy, FaChartLine } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div
        className={`bg-[#f28d1c] text-white w-64 min-h-screen transition-all ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-2/3"
          }`}
        style={{ transition: "transform 0.3s ease" }}
      >
        <div className="flex items-center justify-between p-2 bg-[#7f4b23]">
          {/* <img src="/logo.svg" alt="STEMHub Logo" className="w-12" /> */}
          <Link href="/" className="text-3xl font-bold text-white font-outfit">
            STEM <span className="text-[#e76f51]">Hub</span>
          </Link>
          <button
            className="text-white text-2xl"
            onClick={handleToggleSidebar}
          >
            {sidebarOpen ? <FaAngleLeft className="text-2xl text-gray-white font-bold" /> : <FaAngleLeft className="text-2xl text-gray-white font-bold rotate-180" />}
          </button>
        </div>

        <div className={`mt-10 space-y-6 px-6  ${sidebarOpen ? "px-6": "px-0"}`}>
          <Link
            href="/dashboard"
            className="block py-2 px-4 rounded-lg text-lg hover:bg-[#d4af37] transition flex items-center"
          >
            <FaTrophy className={`mr-2 ${sidebarOpen ? "text-2xl" : "text-3xl mr-0"}`} />
            <span className={`${sidebarOpen ? "inline-block " : "hidden"}`}> Dashboard </span>
          </Link>
          <Link
            href="/profile"
            className="block py-2 px-4 rounded-lg text-lg hover:bg-[#d4af37] transition flex items-center"
          >
            <FaUserCircle className={`mr-2 ${sidebarOpen ? "text-2xl" : "text-3xl mr-0"}`} />
            <span className={`${sidebarOpen ? "inline-block" : "hidden"}`}>Profile</span>
          </Link>
          <Link
            href="/"
            className="block py-2 px-4 rounded-lg text-lg hover:bg-[#d4af37] transition flex items-center"
          >
            <FaUserCircle className={`mr-2 ${sidebarOpen ? "text-2xl" : "text-3xl mr-0"}`} />
            <span className={`${sidebarOpen ? "inline-block" : "hidden"}`}>Log out</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
