import React, { useState } from "react";
import logo from "../assets/logo.png";
import { BsFillGridFill } from "react-icons/bs";
import { FaUserPlus, FaCalendarDay, FaUsers } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";
import { PiHeadsetFill } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const mainMenuItems = [
  { id: 1, icon: BsFillGridFill, label: "Dashboard" },
  { id: 2, icon: FaUserPlus, label: "Recruitment" },
  { id: 3, icon: FaCalendarDay, label: "Schedule" },
  { id: 4, icon: FaUsers, label: "Employee" },
  { id: 5, icon: FaCircleDot, label: "Department" },
];

const otherMenuItems = [
  { id: 6, icon: PiHeadsetFill, label: "Support" },
  { id: 7, icon: IoMdSettings, label: "Settings" },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (id) => {
    setActiveTab(id);
    toggleSidebar();
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="bg-[#FAFAFA] w-80 h-screen border-r border-gray-200 hidden lg:block">
        <div className="flex items-center justify-center py-4">
          <img src={logo} alt="logo" className="p-4" />
        </div>
        <nav className="mt-10">
          <ul>
            <h1 className="px-6 text-gray-400 font-semibold text-xs mb-3">
              MAIN MENU
            </h1>
            {mainMenuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`flex items-center px-6 py-4 cursor-pointer ${
                  activeTab === item.id
                    ? "text-[#FF5151] font-semibold bg-red-100"
                    : "text-gray-400 hover:bg-gray-200 hover:text-gray-900"
                }`}
              >
                <item.icon className="mr-3" size={18} />
                {item.label}
              </li>
            ))}
          </ul>
          <ul className="mt-10">
            <h1 className="px-6 text-gray-400 font-semibold text-xs mb-3">
              OTHER
            </h1>
            {otherMenuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`flex items-center px-6 py-4 cursor-pointer ${
                  activeTab === item.id
                    ? "text-[#FF5151] font-semibold bg-red-100"
                    : "text-gray-500 hover:bg-gray-200 hover:text-gray-900"
                }`}
              >
                <item.icon className="mr-3" size={18} />
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile Sidebar*/}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={toggleSidebar}
        >
          <aside
            className="bg-[#FAFAFA] w-64 h-full shadow-lg border-r border-gray-200 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between py-4 px-6">
              <img src={logo} alt="logo" className="p-4" />
              <IoClose
                className="text-gray-600 cursor-pointer"
                size={24}
                onClick={toggleSidebar}
              />
            </div>
            <nav className="mt-10">
              <ul>
                <h1 className="px-6 text-gray-400 font-semibold text-xs mb-3">
                  MAIN MENU
                </h1>
                {mainMenuItems.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => handleTabClick(item.id)}
                    className={`flex items-center px-6 py-4 cursor-pointer ${
                      activeTab === item.id
                        ? "text-[#FF5151] font-semibold bg-red-100"
                        : "text-gray-400 hover:bg-gray-200 hover:text-gray-900"
                    }`}
                  >
                    <item.icon className="mr-3" size={18} />
                    {item.label}
                  </li>
                ))}
              </ul>
              <ul className="mt-10">
                <h1 className="px-6 text-gray-400 font-semibold text-xs mb-3">
                  OTHER
                </h1>
                {otherMenuItems.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => handleTabClick(item.id)}
                    className={`flex items-center px-6 py-4 cursor-pointer ${
                      activeTab === item.id
                        ? "text-[#FF5151] font-semibold bg-red-100"
                        : "text-gray-500 hover:bg-gray-200 hover:text-gray-900"
                    }`}
                  >
                    <item.icon className="mr-3" size={18} />
                    {item.label}
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
};

export default Sidebar;
