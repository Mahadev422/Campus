import React from "react";

const StatsCard = ({userData}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Profile Stats</h3>
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-xl">
            <div className="text-2xl font-bold text-blue-600">
              {userData.stats.joinedClubs}
            </div>
            <div className="text-gray-600 text-sm">Clubs</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-xl">
            <div className="text-2xl font-bold text-purple-600">
              {userData.stats.eventsAttended}
            </div>
            <div className="text-gray-600 text-sm">Events</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-xl">
            <div className="text-2xl font-bold text-green-600">
              {userData.stats.achievements}
            </div>
            <div className="text-gray-600 text-sm">Achievements</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-xl">
            <div className="text-2xl font-bold text-orange-600">
              {userData.stats.connections}
            </div>
            <div className="text-gray-600 text-sm">Connections</div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Events Organized</span>
            <span className="font-bold">{userData.stats.eventsOrganized}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Volunteer Hours</span>
            <span className="font-bold">
              {userData.stats.hoursVolunteered}+
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Member Since</span>
            <span className="font-bold">Sep 2022</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
