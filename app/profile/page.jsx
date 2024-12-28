"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ProfileSection from "../components/ProfileSection";
import BadgesSection from "../components/BadgesSection";

const Profile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar sidebarOpen={sidebarOpen} handleToggleSidebar={handleToggleSidebar} />

      <div className="flex-1 p-6">
        <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-700">Profile Overview</h1>
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

        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ProfileSection />
          </div>

          <div className="hidden lg:block">
            <BadgesSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;