import React from "react";
import { HiOutlineUserGroup } from "react-icons/hi";

const ClubNotFound = ({setFilterCategory, setSearchTerm}) => {
  return (
    <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
      <HiOutlineUserGroup className="w-16 h-16 text-gray-300 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-700 mb-2">
        No clubs found
      </h3>
      <p className="text-gray-500 mb-6">Try adjusting your search or filters</p>
      <button
        onClick={() => {
          setSearchTerm("");
          setFilterCategory("All");
        }}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default ClubNotFound;
