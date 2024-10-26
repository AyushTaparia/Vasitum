import React from "react";
import Card from "../components/Card";
import Announcement from "../components/Announcement";
import ActivityCard from "../components/ActivityCard";
import ScheduleCard from "../components/ScheduleCard";
import graph_1 from "../assets/graph_1.png";
import graph_2 from "../assets/graph_2.png";

const Dashboard = () => {
  return (
    <div className="p-8">
      <h1 className="font-semibold text-3xl mb-5 text-[#161E54]">Dashboard</h1>

      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8">
        {/* left Side */}
        <div className="w-full lg:w-3/5 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className=" lg:col-span-3 w-full grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card
              title="Available Position"
              value="24"
              subtitle="4 Urgently needed"
              textColor="text-[#FF5151]"
              bgColor="bg-[#FFEFE7]"
            />
            <Card
              title="Job Open"
              value="10"
              subtitle="4 Active hiring"
              textColor="text-[#3786F1]"
              bgColor="bg-[#E8F0FB]"
            />
            <Card
              title="New Employees"
              value="24"
              subtitle="4 Department"
              textColor="text-[#EE61CF]"
              bgColor="bg-[#FDEBF9]"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-3">
            <Card
              title="Total Employees"
              value={<h1 className="text-5xl">216</h1>}
              subtitle={
                <div className="text-gray-500 flex flex-col text-xs space-y-1 mt-2">
                  <p>120 Men</p>
                  <p>96 Women</p>
                </div>
              }
              borderColor="border border-gray-200"
              graph={
                <div className="space-y-5 flex flex-col">
                  <img src={graph_1} alt="graph_1" />
                  <span className="bg-[#FFEFE7] px-2 py-1 font-semibold text-gray-700">
                    +2% Past Month
                  </span>
                </div>
              }
            />
            <Card
              title="Talent Request"
              value={<h1 className="text-5xl">16</h1>}
              subtitle={
                <div className="text-gray-500 flex flex-col text-xs space-y-1 mt-2">
                  <p>6 Men</p>
                  <p>10 Women</p>
                </div>
              }
              borderColor="border border-gray-200"
              graph={
                <div className="space-y-5 flex flex-col">
                  <img src={graph_2} alt="graph_2" />
                  <span className="bg-[#FFEFE7] px-2 py-1 font-semibold text-gray-700">
                    +5% Past Month
                  </span>
                </div>
              }
            />
          </div>

          <div className="w-full lg:col-span-3">
            <Announcement />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-2/5 flex flex-col space-y-6 lg:justify-between">
          <ActivityCard />
          <ScheduleCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
