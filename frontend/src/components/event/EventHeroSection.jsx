import React from "react";
import { FaPlus } from "react-icons/fa";

const EventHeroSection = () => {
  return (
    <section className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Discover Amazing
              <span className="block text-yellow-300">Campus Events</span>
            </h1>
            <p className="text-xl opacity-90 mb-8">
              From workshops to concerts, find events that match your interests
              and connect with the campus community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2">
                <FaPlus className="w-5 h-5" />
                <span>Create Event</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHeroSection;
