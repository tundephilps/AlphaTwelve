import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlineUser,
  AiOutlineFileText,
  AiOutlineBell,
  AiOutlineMessage,
  AiOutlineSetting,
} from "react-icons/ai";
import { BsMoon } from "react-icons/bs";
import Logo from "../assets/images/Logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import profile from "../assets/images/profile.png";

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const menuItems = [
    { name: "Home", icon: AiOutlineHome },
    { name: "Events", icon: AiOutlineCalendar },
    { name: "Speakers", icon: AiOutlineUser },
    { name: "Reports", icon: AiOutlineFileText },
    { name: "Notifications", icon: AiOutlineBell, badge: 3 },
    { name: "Messages", icon: AiOutlineMessage },
    { name: "Settings", icon: AiOutlineSetting },
  ];

  return (
    <div>
      <nav className="bg-white fixed top-0 w-full  shadow-md lg:hidden block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              {/* <div className="bg-blue-500 text-white px-4 py-2 rounded">
                Full Logo
              </div> */}
              <img src={Logo} />
            </div>
            <div className="flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                {isMenuOpen ? (
                  <div className="border rounded-full p-2">
                    <FiX className="h-4 w-4" />
                  </div>
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Slide-out menu */}
        <div
          className={`fixed inset-y-0 right-0 mt-16 w-full overflow-hidden bg-white text-[#334155] shadow-xl transform ${
            isMenuOpen ? "-translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="h-full flex flex-col text-[#334155]">
            <div className="hidden px-4 py-6 border-b border-gray-200 ">
              <div className="flex items-center justify-between">
                <div className="bg-blue-500 text-white px-4 py-2 rounded">
                  Full Logo
                </div>
                <button
                  onClick={toggleMenu}
                  className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <FiX className="h-6 w-6" />
                </button>
              </div>
            </div>
            <nav className="flex-1 overflow-y-hidden text-[#334155]">
              <ul className="py-2">
                {menuItems.map((item, index) => (
                  <li key={index} className="px-4 py-1">
                    <a
                      href="#"
                      className="flex items-center text-gray-700  hover:bg-gray-100  rounded-md px-3 py-2"
                    >
                      <item.icon className="h-6 w-6 mr-3" />
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="ml-auto bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                          {item.badge}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
                <div className="inline-flex gap-4 px-6">
                  <div
                    className={`ml-auto w-10 h-6 bg-gray-200 rounded-full p-1 duration-300 ease-in-out ${
                      isDarkMode ? "bg-blue-600" : ""
                    }`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                        isDarkMode ? "translate-x-4" : ""
                      }`}
                    ></div>
                  </div>
                  <span>Dark mode</span>
                </div>
              </ul>
              <div className=" flex py-2 px-6 gap-4">
                <img src={profile} className="w-10 h-10 rounded-md" />
                <div
                  className={`flex justify-between items-center overflow-hidden transition-all `}
                >
                  <div className="leading-4">
                    <h4 className="font-semibold">Rudra Devi</h4>
                    <span className="text-xs text-gray-600">
                      rudra.devi@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </nav>
            <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/40"
                  alt="User"
                  className="h-10 w-10 rounded-full mr-3"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Rudra Devi
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    rudra.devi@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileNavbar;
