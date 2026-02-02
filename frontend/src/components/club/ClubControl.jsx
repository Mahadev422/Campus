import React from "react";
import { FaFilter, FaSearch, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const ClubControl = ({
  searchTerm,
  setSearchTerm,
  filterCategory,
  setFilterCategory,
}) => {
  const categories = [
    "All",
    "Technology",
    "Sports",
    "Arts",
    "Science",
    "Music",
    "Photography",
    "Literature",
    "Gaming",
    "Film",
    "Environment",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search Bar */}
        <div className="flex-1 relative">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search clubs by name or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Filter Dropdown */}
        <div className="flex justify-between gap-2">
          <div className="relative">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="appearance-none pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          <Link to='create-club' className="flex items-center space-x-2 p-3 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
            <FaPlus className="w-5 h-5" />
            <span>Request Club</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClubControl;
