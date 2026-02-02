import { useEffect } from "react";
import {
  FaCalendarTimes,
  FaFilter,
  FaSearch,
} from "react-icons/fa";
import { HiOutlineTag } from "react-icons/hi";

import EventCard from "../../components/event/EventCard";
import EventHeroSection from "../../components/event/EventHeroSection";
import { useHelper } from "../../store/useHelper";
import { useGetAllEvent } from "../../store/useEvent";

// Events Page Component
const AllEvent = () => {
  const { eventTypes, statusOptions, firstCapital } = useHelper();
  const { getEvents, events, loading } = useGetAllEvent();

  useEffect(() => {
    getEvents();
  }, [0]);


  if(loading) return <p>Loading...</p>
  // Filter and sort events

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
      {/* <EventHeroSection /> */}

      {/* Main Content */}
      <section className="px-6 mx-auto py-8">
        {/* Control Bar */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search events by name or description..."
                  // value={searchTerm}
                  // onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Status Filter */}
              <div className="relative">
                <select
                  className="appearance-none pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                >
                  {statusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>

              {/* Type Filter */}
              <div className="relative">
                <select
                  className="appearance-none pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                >
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type === "all" ? "All Types" : firstCapital(type)}
                    </option>
                  ))}
                </select>
                <HiOutlineTag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                All
                <span className="text-gray-500 text-lg ml-2">
                  12
                </span>
              </h2>
            </div>
            <div className="text-gray-600">
              Showing 12 events
            </div>
          </div>

          {events === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
              <FaCalendarTimes className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No events found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search or filters
              </p>
              <button
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {events.map((event) => (
                <div key={event._id}> <EventCard event={event} /></div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllEvent;
