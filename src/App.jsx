import React, { useState } from "react";
import Dashboard from "./page/Dashboard";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col w-full">
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex-1 overflow-y-scroll scrollbar-hide">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
