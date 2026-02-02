import React from "react";
import {
  FaEnvelope,
  FaGlobe,
  FaPhone,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const EventOrganizers = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Event Organizers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {eventData.organizers.map((organizer) => (
            <div key={organizer.id} className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center space-x-4">
                <img
                  src={organizer.avatar}
                  alt={organizer.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{organizer.name}</h4>
                  <p className="text-blue-600 font-semibold text-sm">
                    {organizer.role}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    {organizer.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default EventOrganizers;
