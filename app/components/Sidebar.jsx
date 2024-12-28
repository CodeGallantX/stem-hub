// Sidebar.js
"use client";
import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaTrophy, FaUserCircle } from "react-icons/fa";
import Link from "next/link";

const Sidebar = ({ sidebarOpen, handleToggleSidebar }) => {
  return (
    <div
      className={`bg-[#f28d1c] text-white ${sidebarOpen ? "w-64" : "w-20"} min-h-screen transition-all duration-300`}
    >
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
            className={`transition-transform duration-300 ${sidebarOpen ? "rotate-0" : "-rotate-180"}`}
          />
        </button>
      </div>

      <div className="mt-10 space-y-4">
        <Link
          href="/dashboard"
          className={`block py-3 px-4 flex items-center space-x-4 rounded-lg hover:bg-[#d4af37] transition ${sidebarOpen ? "justify-start" : "justify-center"}`}
        >
          <FaTrophy className="text-2xl" />
          {sidebarOpen && <span className="text-lg">Dashboard</span>}
        </Link>
        <Link
          href="/profile"
          className={`block py-3 px-4 flex items-center space-x-4 rounded-lg hover:bg-[#d4af37] transition ${sidebarOpen ? "justify-start" : "justify-center"}`}
        >
          <FaUserCircle className="text-2xl" />
          {sidebarOpen && <span className="text-lg">Profile</span>}
        </Link>
        <Link
          href="/"
          className={`block py-3 px-4 flex items-center space-x-4 rounded-lg hover:bg-[#d4af37] transition ${sidebarOpen ? "justify-start" : "justify-center"}`}
        >
          <FaUserCircle className="text-2xl" />
          {sidebarOpen && <span className="text-lg">Log Out</span>}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;