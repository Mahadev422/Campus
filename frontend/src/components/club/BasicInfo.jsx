import React from "react";
import { FaShareAlt, FaUserPlus, FaUsers } from "react-icons/fa";

import { useAuth } from "../../store/useAuth";
import StatusCard from "./StatusCard";
import { useClubById } from "../../store/useClub";

const BasicInfo = ({ clubData }) => {
  const { user } = useAuth();
  const { joinClub, joinLoading, error, success } = useClubById();

  const member =
    user &&
    [...clubData.coordinator, ...clubData.members].some(
      (member) => member.userId === user._id,
    );

  const request =
    user && clubData.requestForJoin.some((req) => req === user._id);

  return (
    <div className="px-6 relative -mt-16">
      <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start space-x-6">
            <div className="relative -mt-20">
              <img
                src={clubData.logo}
                alt={clubData.clubName}
                className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border-8 border-white shadow-2xl"
              />
              <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full">
                <FaUsers className="w-6 h-6" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {clubData.clubName}
                </h1>
                <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full font-semibold">
                  {clubData.category.charAt(0).toUpperCase() +
                    clubData.category.slice(1)}
                </span>
              </div>
              <p className="text-xl text-gray-600 mb-4">{clubData.tagline}</p>
              <div className="flex items-center gap-2">
                <h1>Status:</h1>
                <StatusCard status={clubData.approved} />
              </div>
            </div>
          </div>

          <div className="flex justify-around gap-3">
            {member ? (
              <span
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2
                bg-gray-100 text-gray-700`}
              >
                <FaUserPlus className="w-5 h-5" />
                <span>Member ✓</span>
              </span>
            ) : request ? (
              <span
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2
                bg-gray-300 text-gray-700`}
              >
                <FaUserPlus className="w-5 h-5" />
                <span>Request ✓</span>
              </span>
            ) : (
              <button
                onClick={() => joinClub(clubData._id)}
                disabled={joinLoading}
                className="relative px-6 py-3 rounded-xl font-semibold transition-all duration-300
             flex items-center justify-center gap-2
             bg-linear-to-r from-blue-600 to-purple-600 text-white
             hover:shadow-lg disabled:opacity-60"
              >
                <span className={joinLoading ? "opacity-0" : "opacity-100"}>
                  <FaUserPlus className="inline w-5 h-5 mr-2" />
                  
                </span>
                {joinLoading ? (
                  <span className="absolute flex items-center justify-center">
                    <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  </span>
                ): 'Join Club'}
              </button>
            )}
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center justify-center space-x-2">
              <FaShareAlt className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
