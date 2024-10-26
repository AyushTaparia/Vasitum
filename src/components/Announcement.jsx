import React from "react";
import { FiChevronDown, FiMoreHorizontal } from "react-icons/fi";
import { BsFillPinAngleFill } from "react-icons/bs";

const Announcement = () => {
  return (
    <div className="px-6 py-4 bg-white rounded-lg w-full border border-gray-200 shadow duration-200 hover:shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base lg:text-xl font-semibold text-[#161E54]">Announcement</h3>
        <div className="flex items-center space-x-1 border border-gray-200 rounded py-1 px-2 justify-center cursor-pointer transition-all duration-200 hover:bg-gray-50 hover:shadow-md hover:border-gray-300">
          <p className="text-gray-600 font-semibold text-xs lg:text-sm hover:text-gray-800">
            Today, 13 Sep 2021
          </p>
          <FiChevronDown
            className="text-gray-600 hover:text-gray-800 pt-1"
            size={24}
          />
        </div>
      </div>

      <hr className="border border-gray-200 my-4" />

      <ul className="space-y-4 max-h-60 overflow-y-auto scrollbar-hide">
        <li className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm flex justify-between items-end lg:items-center transition-all duration-200 hover:shadow-md">
          <div>
            <p className="text-gray-900 lg:text-lg">
              Outing schedule for every department
            </p>
            <p className="text-gray-600 font-semibold pt-2 text-xs">
              5 Minutes ago
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <BsFillPinAngleFill
              className="text-gray-400 hover:text-gray-700 transition-colors duration-200 cursor-pointer"
              size={24}
            />{" "}
            <FiMoreHorizontal
              className="text-gray-400 hover:text-gray-700 transition-colors duration-200 cursor-pointer"
              size={20}
            />
          </div>
        </li>

        <li className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm flex justify-between items-end lg:items-center transition-all duration-200 hover:shadow-md">
          <div>
            <p className="text-gray-900 lg:text-lg">Meeting HR Department</p>
            <p className="text-gray-600 font-semibold pt-2 text-xs">
              Yesterday, 12:30 PM
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <BsFillPinAngleFill
              className="text-gray-400 hover:text-gray-700 transition-colors duration-200 cursor-pointer"
              size={24}
            />{" "}
            <FiMoreHorizontal
              className="text-gray-400 hover:text-gray-700 transition-colors duration-200 cursor-pointer"
              size={20}
            />
          </div>
        </li>

        <li className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm flex justify-between items-end lg:items-center transition-all duration-200 hover:shadow-md">
          <div>
            <p className="text-gray-900 lg:text-lg lg:w-4/5">
              IT Department need two more talents for UX/UI Designer position
            </p>
            <p className="text-gray-600 font-semibold pt-2 text-xs">
              Yesterday, 09:15 AM
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <BsFillPinAngleFill
              className="text-gray-400 hover:text-gray-700 transition-colors duration-200 cursor-pointer"
              size={24}
            />
            <FiMoreHorizontal
              className="text-gray-400 hover:text-gray-700 transition-colors duration-200 cursor-pointer"
              size={20}
            />
          </div>
        </li>
      </ul>

      <hr className="border border-gray-200 my-4" />

      <button className="w-full text-[#FF5151] font-semibold rounded-lg text-center hover:text-red-600 hover:underline">
        See All Announcements
      </button>
    </div>
  );
};

export default Announcement;
