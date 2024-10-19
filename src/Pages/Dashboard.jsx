import { TbUserSquareRounded } from "react-icons/tb";
import { FaAd, FaInfo } from "react-icons/fa";
import Sidebar, { SidebarItem } from "../components/Sidebar";
import { CiSearch } from "react-icons/ci";
import Tables from "../components/Tables";
import Pagination from "../components/Pagination";
import MonthlyDataChart from "../components/Charts";
import ImageSwiper from "../components/Slides";

function Dashboard() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="lg:p-[20px] p-2 w-full bg-[#ffffff]">
        <div className="w-full bg-white rounded-3xl     ">
          <h3 className="text-[22px] font-semibold text-[#000000]">
            Welcome! here your summary
          </h3>

          <div className="flex lg:flex-row flex-col items-center gap-4 pt-2 w-full">
            <div className="h-[88px] w-full border border-[#f2f2f7] rounded-[2px] p-[16px]">
              <p className="text-[#64748b] font-semibold inline-flex gap-2 items-center">
                Total Events <FaInfo className="text-[12px]" />
              </p>
              <p className="text-[#334155] text-[20px] font-semibold">
                100,000{" "}
                <span className="text-[#10B981] text-[10px] font-semibold">
                  +5.0%
                </span>{" "}
              </p>
            </div>
            <div className="h-[88px] w-full border border-[#f2f2f7] rounded-[2px] p-[16px]">
              <p className="text-[#64748b] font-semibold inline-flex gap-2 items-center">
                Active Speakers <FaInfo className="text-[12px]" />
              </p>
              <p className="text-[#334155] text-[20px] font-semibold">
                25{" "}
                <span className="text-[#f43f5e] text-[10px] font-semibold">
                  +5.0%
                </span>{" "}
              </p>
            </div>{" "}
            <div className="h-[88px] w-full border border-[#f2f2f7] rounded-[2px] p-[16px]">
              <p className="text-[#64748b] font-semibold inline-flex gap-2 items-center">
                Total Registration <FaInfo className="text-[12px]" />
              </p>
              <p className="text-[#334155] text-[20px] font-semibold">
                300{" "}
                <span className="text-[#10B981] text-[10px] font-semibold">
                  +5.0%
                </span>{" "}
              </p>
            </div>{" "}
            <div className="h-[88px] w-full border border-[#f2f2f7] rounded-[2px] p-[16px]">
              <p className="text-[#64748b] font-semibold inline-flex gap-2 items-center">
                Total Revenue <FaInfo className="text-[12px]" />
              </p>
              <p className="text-[#334155] text-[20px] font-semibold">
                $500,000{" "}
                <span className="text-[#10B981] text-[10px] font-semibold">
                  +5.0%
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
