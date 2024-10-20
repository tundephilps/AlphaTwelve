import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlineUser,
} from "react-icons/ai";
import { BsPeople, BsFileBarGraph } from "react-icons/bs";

const BottomTabNavigation = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const tabs = [
    { name: "Home", icon: AiOutlineHome },
    { name: "Events", icon: AiOutlineCalendar },
    { name: "Speakers", icon: BsPeople },
    { name: "Reports", icon: BsFileBarGraph },
    { name: "Profile", icon: AiOutlineUser },
  ];

  return (
    <div className="fixed lg:hidden block bottom-0 left-0 right-0 bg-white shadow-lg">
      <div className="flex justify-between items-center px-4 py-2">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`flex flex-col items-center space-y-1 ${
              activeTab === tab.name
                ? "text-purple-600  border-t-2 border-[#8576ff] py-2"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            <tab.icon className="w-6 h-6" />
            <span className="text-xs">{tab.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomTabNavigation;
