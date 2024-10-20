import { TbUserSquareRounded } from "react-icons/tb";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Sidebar, { SidebarItem } from "../components/Sidebar";
import { CiSearch } from "react-icons/ci";
import Tables from "../components/Tables";
import Pagination from "../components/Pagination";
import MonthlyDataChart from "../components/Charts";
import ImageSwiper from "../components/Slides";
import BottomTabNavigation from "../components/BottomTab";
import MobileNavbar from "../components/Navbar";
import { RiArrowRightDownLine, RiArrowRightUpLine } from "react-icons/ri";

function Dashboard() {
  return (
    <div className="flex flex-row">
      <Sidebar />

      <MobileNavbar />
      <div className="lg:p-[20px] p-2 w-full bg-[#ffffff]">
        <div className="w-full bg-white rounded-3xl">
          <h3 className="text-[22px] font-semibold text-[#000000] lg:py-0 pt-16 ">
            Welcome! here's your summary
          </h3>

          <div className="flex lg:flex-row flex-col items-center gap-4 pt-2 w-full">
            <div className="h-[88px] w-full border border-[#f2f2f7] rounded-[2px] p-[16px]">
              <p className="text-[#64748b] font-semibold inline-flex gap-2 items-center">
                Total Events{" "}
                <IoMdInformationCircleOutline className="text-[12px]" />
              </p>
              <p className="text-[#334155] text-[20px] font-semibold flex items-center gap-2">
                100,000{" "}
                <span className="text-[#10B981] text-[10px] font-semibold  inline-flex ">
                  <RiArrowRightUpLine /> +5.0%
                </span>{" "}
              </p>
            </div>
            <div className="h-[88px] w-full border border-[#f2f2f7] rounded-[2px] p-[16px]">
              <p className="text-[#64748b] font-semibold inline-flex gap-2 items-center">
                Active Speakers{" "}
                <IoMdInformationCircleOutline className="text-[12px]" />
              </p>
              <p className="text-[#334155] text-[20px] font-semibold flex items-center gap-2">
                25{" "}
                <span className="text-[#f43f5e] text-[10px] font-semibold inline-flex">
                  <RiArrowRightDownLine /> +5.0%
                </span>{" "}
              </p>
            </div>{" "}
            <div className="h-[88px] w-full border border-[#f2f2f7] rounded-[2px] p-[16px]">
              <p className="text-[#64748b] font-semibold inline-flex gap-2 items-center">
                Total Registration{" "}
                <IoMdInformationCircleOutline className="text-[12px]" />
              </p>
              <p className="text-[#334155] text-[20px] font-semibold flex items-center gap-2">
                300{" "}
                <span className="text-[#10B981] text-[10px] font-semibold inline-flex">
                  <RiArrowRightUpLine /> +5.0%
                </span>{" "}
              </p>
            </div>{" "}
            <div className="h-[88px] w-full border border-[#f2f2f7] rounded-[2px] p-[16px]">
              <p className="text-[#64748b] font-semibold inline-flex gap-2 items-center">
                Total Revenue{" "}
                <IoMdInformationCircleOutline className="text-[12px]" />
              </p>
              <p className="text-[#334155] text-[20px] font-semibold flex items-center gap-2">
                $500,000{" "}
                <span className="text-[#10B981] text-[10px] font-semibold inline-flex">
                  <RiArrowRightUpLine /> +5.0%
                </span>{" "}
              </p>
            </div>
          </div>
          <h3 className="text-[22px] font-semibold text-[#000000] pt-6">
            Event Registration per month
          </h3>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 pt-6 overflow-hidden">
            <MonthlyDataChart />
            <ImageSwiper />
          </div>
          <div className="pt-8">
            <Tables />
            <Pagination />

            <div className="h-[100px]" />
          </div>
        </div>
      </div>
      <BottomTabNavigation />
    </div>
  );
}

export default Dashboard;
