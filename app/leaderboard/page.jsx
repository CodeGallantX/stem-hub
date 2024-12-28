"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Leaderboard from "../components/Leaderboard";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar sidebarOpen={sidebarOpen} handleToggleSidebar={handleToggleSidebar} />

      <div className="p-6 w-full">
          <Leaderboard />
      </div>
    </div>
  );
};

export default App;