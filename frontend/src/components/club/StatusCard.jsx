import React from "react";
import { FaClock, FaTimesCircle } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";

const StatusCard = ({status}) => {
  return (
    <div>
      {status == "accepted" ? (
        <div className="flex items-center space-x-1">
          <span className="font-semibold font-serif text-green-500">
            {status}
          </span>
          <FcApproval className="w-5 h-5" />
        </div>
      ) : status == "pending" ? (
        <div className="flex items-center space-x-1 text-yellow-400">
          <span className="font-semibold font-serif">{status}</span>
          <FaClock className="w-5 h-5 animate-pulse" />
        </div>
      ) : (
        <div className="flex items-center space-x-1 text-red-500">
          <span className="font-semibold font-serif">{status}</span>
          <FaTimesCircle className="w-5 h-5" />
        </div>
      )}
    </div>
  );
};

export default StatusCard;
