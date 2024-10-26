import React, { useState } from "react";
import { FiChevronDown, FiMenu, FiSearch } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import profile from "../assets/profile.png";

const Header = ({ toggleSidebar }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="bg-white border-b py-6 flex justify-between items-center px-8">
      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden flex items-center space-x-6">
        <FiMenu
          className="text-gray-400 cursor-pointer"
          size={24}
          onClick={toggleSidebar}
        />
        <FiSearch
          className="text-gray-400 cursor-pointer"
          size={24}
          onClick={toggleSearchBar}
        />
      </div>

      {/* Search Bar */}
      <div className="relative w-full max-w-md hidden lg:block">
        <input
          type="text"
          className="w-full bg-[#FAFAFA] border border-[#E0E0E0] pl-4 pr-10 py-2 rounded-lg text-gray-600 text-sm focus:outline-none"
          placeholder="Search"
        />
        <FiSearch
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          size={20}
        />
      </div>

      {/* Mobile Search Icon */}
      <div className="lg:hidden flex items-center space-x-4"></div>

      {/* Right Section */}
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <IoIosNotifications
              className="text-gray-400 cursor-pointer"
              size={28}
            />
            <span className="absolute top-[4px] right-1.5 w-[8px] h-[8px] bg-[#FF5151] rounded-full"></span>
          </div>
          <RiMessage2Fill className="text-gray-400 cursor-pointer" size={28} />
        </div>

        {/* Profile Section */}
        <div className="flex items-center space-x-2 lg:space-x-4">
          <img
            src={profile}
            alt="profile"
            className="w-[42px] h-[42px] rounded-full"
          />
          <span className="text-gray-700 font-semibold hidden lg:block">
            Admirra John
          </span>
          <FiChevronDown
            className="text-gray-400 cursor-pointer mt-1"
            size={24}
          />
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="absolute top-16 left-0 w-full bg-white p-4 shadow-lg z-50 lg:hidden">
          <input
            type="text"
            className="w-full bg-[#FAFAFA] border border-[#E0E0E0] px-4 py-2 rounded-lg text-gray-600 text-sm focus:outline-none"
            placeholder="Search"
            autoFocus
          />
        </div>
      )}
    </header>
  );
};

export default Header;
