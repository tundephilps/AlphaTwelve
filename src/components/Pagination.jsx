import React from "react";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";
import { RiArrowDropLeftLine } from "react-icons/ri";

const Pagination = () => {
  return (
    <div className="flex flex-row items-center justify-between pt-4">
      <div className="flex flex-row items-center gap-3">
        <div className="border h-[36px] w-[36px] hover:bg-[#e2e8f0] items-center justify-center flex">
          <RiArrowDropLeftLine />
        </div>
        <div className="rounded-full bg-[#8576ff] h-[24px] w-[24px] text-white items-center justify-center flex">
          1
        </div>
        <div className="rounded-full bg-transparent h-[24px] w-[24px] text-[#334155] items-center justify-center flex">
          2
        </div>
        <div className="rounded-full bg-transparent h-[24px] w-[24px] text-[#334155] items-center justify-center flex">
          3
        </div>
        <div className="border h-[36px] w-[36px] hover:bg-[#e2e8f0] items-center justify-center flex">
          <RiArrowDropRightLine />
        </div>
      </div>
      <div className="flex flex-row items-center  gap-2">
        <p>Show:</p>
        <div className="h-[36px] w-[96px] rounded-[2px]  border border-[#e2e8f0] inline-flex items-center justify-center gap-3">
          10 rows <RiArrowDropDownLine />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
