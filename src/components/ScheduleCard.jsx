import React from "react";
import { FiChevronDown, FiMoreHorizontal } from "react-icons/fi";

const ScheduleCard = () => {
  return (
    <div className="px-6 py-4 bg-white rounded-lg shadow duration-200 hover:shadow-md w-full border border-gray-200 h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base lg:text-xl font-semibold text-[#161E54]">
          Upcoming Schedule
        </h3>
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

      <div className="max-h-72 overflow-y-auto scrollbar-hide">
        {/* Priority Section */}
        <div className="mb-4">
          <h4 className="font-semibold text-sm text-gray-500 mb-2">Priority</h4>
          <ul className="space-y-4">
            <li className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200 flex items-end lg:items-center justify-between transition-all duration-200 hover:shadow-md">
              <div>
                <p className="text-gray-900 lg:text-lg">
                  Review candidate applications
                </p>
                <p className="text-gray-500 font-semibold pt-2 text-xs">
                  Today - 11:30 AM
                </p>
              </div>
              <FiMoreHorizontal
                className="text-gray-400 hover:text-gray-700 transition-colors duration-200 cursor-pointer"
                size={28}
              />
            </li>
          </ul>
        </div>

        {/* Other Section */}
        <div>
          <h4 className="font-semibold text-sm text-gray-500 mb-2">Other</h4>
          <ul className="space-y-4">
            <li className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200 flex items-end lg:items-center justify-between transition-all duration-200 hover:shadow-md">
              <div>
                <p className="text-gray-900 lg:text-lg">
                  Interview with candidates
                </p>
                <p className="text-gray-500 font-semibold pt-2 text-xs">
                  Today - 10:30 AM
                </p>
              </div>
              <FiMoreHorizontal
                className="text-gray-400 hover:text-gray-700 transition-colors duration-200 cursor-pointer"
                size={28}
              />
            </li>
            <li className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200 flex items-end lg:items-center justify-between transition-all duration-200 hover:shadow-md">
              <div>
                <p className="text-gray-900 lg:text-lg lg:w-[45vh]">
                  Short meeting with product designer from IT Department
                </p>
                <p className="text-gray-500 font-semibold pt-2 text-xs">
                  Today - 09:15 AM
                </p>
              </div>
              <FiMoreHorizontal
                className="text-gray-400 hover:text-gray-700 transition-colors duration-200 cursor-pointer"
                size={28}
              />
            </li>
          </ul>
        </div>
      </div>

      <hr className="border border-gray-200 my-4" />

      {/* Create Schedule Button */}
      <button className="w-full text-white bg-red-500 py-2 rounded-lg shadow-md hover:bg-red-600">
        Create a New Schedule
      </button>
    </div>
  );
};

export default ScheduleCard;
