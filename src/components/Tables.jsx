import React, { useState, useEffect } from "react";
import {
  FaArrowDown,
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
} from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbDownload } from "react-icons/tb";
import { RxDotFilled } from "react-icons/rx";
import EventDetailsModal from "./Modal";

const Tables = () => {
  const [expandedRows, setExpandedRows] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [filteredItems, setFilteredItems] = useState([]);

  const eventData = {
    name: "Tech Conference 2024",
    date: "June 15-17, 2024",
    description:
      "Annual technology conference featuring the latest innovations.",
    speakers: ["Speaker name A", "Speaker name B", "Speaker name C"],
    attendees: 300,
  };

  const tableItems = [
    {
      name: "Cloud Innovation Summit",
      date: "2024-10-15",
      speaker: "Jane Doe",
      status: "Completed",
    },
    {
      name: "Blockchain Revolution Conference",
      date: "2024-11-15",
      speaker: "Dr Peter Smith",
      status: "In Progress",
    },
    {
      name: "AI in Healthcare Symposium",
      date: "2024-12-01",
      speaker: "Dr Aisha Malik",
      status: "Completed",
    },
    {
      name: "Future of Fintech Forum",
      date: "2024-10-25",
      speaker: "John Lee",
      status: "Completed",
    },
    {
      name: "Data Analytics in Business",
      date: "2024-11-12",
      speaker: "Rachel Moore",
      status: "Completed",
    },
    {
      name: "Sustainable Energy Expo",
      date: "2024-09-28",
      speaker: "Prof Alan Green",
      status: "In Progress",
    },
    {
      name: "Web3 interfaces Workshop",
      date: "2024-10-10",
      speaker: "Kevin Adams",
      status: "In Progress",
    },
    {
      name: "Cybersecurity for Startups",
      date: "2024-11-19",
      speaker: "Emily Zhang",
      status: "Completed",
    },
    {
      name: "Smart Cities Forum",
      date: "2024-10-18",
      speaker: "Dr Maria Hernandez",
      status: "In Progress",
    },
    {
      name: "Teach Safari Mixer",
      date: "2024-09-30",
      speaker: "Guest Panel",
      status: "In Progress",
    },
  ];

  useEffect(() => {
    filterAndSortItems();
  }, [searchTerm, statusFilter, sortBy, sortOrder]);

  const filterAndSortItems = () => {
    let filtered = tableItems.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.speaker.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "All" || item.status === statusFilter;
      return matchesSearch && matchesStatus;
    });

    filtered.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return sortOrder === "asc" ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    setFilteredItems(filtered);
  };

  const toggleRow = (idx) => {
    setExpandedRows((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const handleSort = (key) => {
    setSortBy(key);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const StatusButton = ({ status }) => {
    if (status === "Completed") {
      return (
        <div className="bg-[#d1fae5] text-[#108981] text-[12px] h-[24px] w-[99px] justify-center items-center rounded-full inline-flex">
          <RxDotFilled className="text-2xl" /> Completed
        </div>
      );
    } else if (status === "In Progress") {
      return (
        <div className="bg-[#dbeafe] text-[#3b82f6] text-[12px] h-[24px] w-[99px] justify-center items-center rounded-full inline-flex">
          <RxDotFilled className="text-2xl" /> In Progress
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <p className="text-[#000000] text-[18px] font-medium pb-4">
        Events History
      </p>
      {/* Search and Filter */}
      <div className="flex lg:flex-row flex-col items-center  justify-between w-full">
        <div className="flex lg:items-center lg:flex-row flex-col gap-2 text-[#334155] w-full">
          <div className="h-[36px] lg:w-[200px] w-full border border-[#e2e8f0] inline-flex items-center relative">
            <FaSearch className="text-[#94a3b8] text-[14px] absolute left-2" />
            <input
              className="border-none outline-none pl-8 bg-transparent w-full"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="h-[36px] lg:w-[88px] w-full rounded-[2px]  border border-[#e2e8f0] inline-flex items-center justify-center gap-3">
            Date
            <RiArrowDropDownLine />
          </div>
          <div className="h-[36px] lg:w-[99px] w-full rounded-[2px]  border border-[#e2e8f0] inline-flex items-center justify-center px-2">
            <select
              className="bg-transparent border-none outline-none"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">Status</option>
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
            </select>
            {/* <RiArrowDropDownLine /> */}
          </div>
          <div className="h-[36px] lg:w-[99px] w-full rounded-[2px]  border border-[#e2e8f0] inline-flex items-center justify-center gap-3">
            Name <RiArrowDropDownLine />
          </div>
          <p className="font-semibold text-[#334155] items-start">
            Displaying {filteredItems.length} results
          </p>
        </div>

        <div className="lg:flex items-center    lg:pt-0 pt-4 lg:flex-row gap-2 text-[#334155] w-full lg:w-[40%]  lg:space-y-0 space-y-4">
          <div className="flex flex-row  items-center justify-between  gap-2 w-full ">
            <p>Sort</p>
            <div className="h-[36px] w-[140px]  rounded-[2px]  border border-[#e2e8f0] inline-flex items-center justify-center gap-3">
              <select
                className="bg-transparent border-none outline-none"
                value={sortBy}
                onChange={(e) => handleSort(e.target.value)}
              >
                <option value="date">Most Recent</option>
                <option value="name">Event Name</option>
                <option value="speaker">Speaker</option>
              </select>
              {/* <RiArrowDropDownLine /> */}
            </div>
          </div>
          <div className="flex justify-between ">
            <div className="h-[36px] w-[36px] rounded-[2px]  border border-[#e2e8f0] inline-flex items-center justify-center gap-3">
              <BsThreeDotsVertical />
            </div>
            <div className="h-[36px] w-[100px] rounded-[2px]  border border-[#e2e8f0] inline-flex items-center justify-center gap-3">
              <TbDownload /> Export
            </div>
          </div>
        </div>
      </div>
      {/* Table */}
      <div className="mt-4  shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-[#f1f5f9] text-gray-600 font-medium border-b ">
            <tr>
              <th
                className="py-3 px-6 cursor-pointer"
                onClick={() => handleSort("name")}
              >
                Event Name{" "}
                {sortBy === "name" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th
                className="py-3 px-6 lg:table-cell hidden cursor-pointer"
                onClick={() => handleSort("date")}
              >
                Date {sortBy === "date" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th
                className="py-3 px-6 lg:table-cell hidden cursor-pointer"
                onClick={() => handleSort("speaker")}
              >
                Speaker{" "}
                {sortBy === "speaker" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th className="py-3 px-6 ">Status</th>
              <th className="py-3 px-6 lg:table-cell hidden"></th>
            </tr>
          </thead>
          <tbody className="divide-y text-[#334155] font-semibold">
            {filteredItems.map((item, idx) => (
              <React.Fragment key={idx}>
                <tr>
                  <td
                    className="px-6 py-4 whitespace-nowrap w-[270px] flex items-center"
                    onClick={() => setShowModal(true)}
                  >
                    <button
                      className="mr-2 lg:hidden"
                      onClick={() => toggleRow(idx)}
                    >
                      <FaChevronRight
                        className={`transition-transform text-xs ${
                          expandedRows[idx] ? "rotate-90 text-xs" : ""
                        }`}
                      />
                    </button>
                    {item.name}
                  </td>
                  {showModal && (
                    <EventDetailsModal
                      event={eventData}
                      onClose={() => setShowModal(false)}
                      onEdit={() => {
                        /* Handle edit */
                      }}
                      onDelete={() => {
                        /* Handle delete */
                      }}
                      onMarkCompleted={() => {
                        /* Handle mark as completed */
                      }}
                    />
                  )}
                  <td className="px-6 py-4 whitespace-nowrap w-[270px] lg:table-cell hidden">
                    {item.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap lg:table-cell hidden">
                    {item.speaker}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusButton status={item.status} />
                  </td>
                </tr>
                {expandedRows[idx] && (
                  <tr className="lg:hidden ">
                    <td colSpan="4" className="px-6 py-4 bg-[#fcf7ff]">
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>{item.speaker}</span>
                        <span>{item.date}</span>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tables;
