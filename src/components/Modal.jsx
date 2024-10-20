import React from "react";
import { AiOutlineClose, AiOutlineUser } from "react-icons/ai";

const EventDetailsModal = ({
  event,
  onClose,
  onEdit,
  onDelete,
  onMarkCompleted,
}) => {
  return (
    <div className="fixed inset-0 bg-black/10 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-[335px] ">
        <div className="">
          <div className="flex justify-between items-start mb-1 p-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {event.name}
              </h2>
              <p className="text-sm text-gray-500">{event.date}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 border rounded-full p-2"
            >
              <AiOutlineClose size={14} />
            </button>
          </div>

          <p className="text-gray-600 mb-1 px-6">{event.description}</p>

          <div className=" rounded-lg py-4  mb-6 px-6">
            <div className="flex items-center mb-2">
              {event.speakers.map((speaker, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center -ml-2 first:ml-0 border-2 border-white"
                >
                  <AiOutlineUser size={16} className="text-gray-600" />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-700">
              {event.speakers.length} Guest Speakers:{" "}
              {event.speakers.join(", ")}
            </p>
            <p className="text-sm text-gray-700 mt-1">
              {event.attendees} Attendees
            </p>
          </div>

          <div className="space-y-2 bg-[#f8fafc] p-6">
            <button className="w-full py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              Edit
            </button>
            <button className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 rounded-md text-sm font-medium text-white">
              Delete
            </button>
            <button className="w-full py-2 px-4 bg-[#8576FF] hover:bg-purple-600 rounded-md text-sm font-medium text-white">
              Mark as completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsModal;
