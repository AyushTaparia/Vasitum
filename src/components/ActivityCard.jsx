import React from "react";

const ActivityCard = () => {
  return (
    <div className=" bg-[#121843] text-white rounded-xl shadow-md relative">
      <h3 className="text-xl font-semibold mb-4 bg-[#1b204a] py-4 px-8 rounded-t-xl">Recently Activity</h3>
 
      <div className="py-4 px-8">
        <p className="text-xs text-gray-400 font-semibold">10.40 AM, Fri 10 Sept 2021</p>
        <p className="text-lg font-semibold mt-1 tracking-wider">You Posted a New Job</p>
        <p className="text-gray-300 mt-2 text-sm tracking-wide lg:w-4/5">
          Kindly check the requirements and terms of work and make sure
          everything is right.
        </p>
      </div>

      <div className="flex lg:flex-row flex-col space-y-3 lg:space-y-0 justify-between lg:items-center px-8 py-4 mb-2">
        <p className="text-gray-300 lg:tracking-wide ">Today you makes 12 Activity</p>
        <button className="bg-[#FF5151] text-white py-2 px-4 rounded text-sm hover:bg-red-500 hover:scale-105 transition-all w-1/2 lg:w-max">
          See All Activity
        </button>
      </div>
    </div>
  );
};

export default ActivityCard;
