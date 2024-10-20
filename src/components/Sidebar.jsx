import logo from "../assets/images/Logo.png";

import Logo2 from "../assets/images/Logo2.png";

import Pro from "../assets/images/Pro.png";
import profile from "../assets/images/profile.png";
import { createContext, useContext, useState } from "react";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

import { IoMdNotificationsOutline } from "react-icons/io";
import { PiChatsCircle } from "react-icons/pi";
import { LuHome } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import Report from "../assets/images/Reports.png";
import Speaker from "../assets/images/Speaker.png";

import Events from "../assets/images/Events.png";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      <aside className="h-full hidden lg:block">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm py-[18px]">
          <div className="p-4 pb-2 flex justify-between items-center lg:pb-8">
            <img
              src={logo}
              className={`overflow-hidden transition-all ${
                expanded ? "w-[64px] h-[32px]" : "hidden"
              }`}
              onClick={() => setExpanded((curr) => !curr)}
            />
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className=" rounded-lg bg-gray-50 hover:bg-gray-100"
            >
              {expanded ? (
                <img src={Logo2} className="h-[32px] w-[32px] hidden " />
              ) : (
                <img src={Logo2} className="h-[32px] w-full ml-[2px] " />
              )}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">
              <SidebarItem icon={<LuHome size={20} />} text="Home" active />
              <SidebarItem
                icon={<img src={Events} size={20} />}
                text="Events"
              />
              <SidebarItem icon={<img src={Speaker} />} text="Speakers" />
              <SidebarItem icon={<img src={Report} />} text="Reports" />
              <SidebarItem
                icon={<IoMdNotificationsOutline size={20} />}
                text="Notifications"
                notificationCount={3} // Add this line
              />
              <SidebarItem icon={<PiChatsCircle size={20} />} text="Messages" />
              <SidebarItem
                icon={<IoSettingsOutline size={20} />}
                text="Settings"
              />
            </ul>
          </SidebarContext.Provider>

          <div
            className="px-6 inline-flex items-center gap-4 cursor-pointer pt-2 text-[#334155] font-medium"
            onClick={() => setExpanded((curr) => !curr)}
          >
            {expanded ? (
              <MdOutlineKeyboardDoubleArrowLeft />
            ) : (
              <MdOutlineKeyboardDoubleArrowRight />
            )}
            <span
              className={`overflow-hidden transition-all ${
                expanded ? "block" : "hidden"
              }`}
            >
              Collapse
            </span>
          </div>

          <div
            className={`overflow-hidden transition-all ${
              expanded
                ? "flex items-center gap-4 px-6 pt-4 cursor-pointer"
                : "hidden"
            }`}
          >
            <div
              className={` w-10 h-6 bg-gray-200 rounded-full p-1 duration-300 ease-in-out }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out `}
              ></div>
            </div>
            <span>Dark mode</span>
          </div>
          <div className=" flex p-4">
            <img src={profile} className="w-10 h-10 rounded-md" />
            <div
              className={`flex justify-between items-center overflow-hidden transition-all ${
                expanded ? "w-52 ml-3" : "w-0"
              } `}
            >
              <div className="leading-4">
                <h4 className="font-semibold text-[#334155]">Rudra Devi</h4>
                <span className="text-xs text-[#647488]">
                  rudra.devi@gmail.com
                </span>
              </div>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}

export function SidebarItem({ icon, text, active, alert, notificationCount }) {
  const { expanded } = useContext(SidebarContext);
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-[#fcf7ff] text-[#8576ff]"
          : "hover:bg-[#fcf7ff] text-[#334155] hover:text-[#8576ff]"
      }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all relative ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
        {notificationCount > 0 && (
          <div className="absolute top-1 right-1 bg-[#f43f5e]  text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {notificationCount}
          </div>
        )}
      </span>

      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}
