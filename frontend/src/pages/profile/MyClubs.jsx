import React from "react";
import JoinedClubCard from "../../components/profile/JoinedClubCard";
import { FaUserPlus } from "react-icons/fa";
import { userData } from "../../data/profile";
import { Link } from "react-router-dom";
import { useUser } from "../../store/useUser";

const MyClubs = () => {

  const {userData} = useUser();
  // console.log(user);

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Joined Clubs <span className="text-blue-500">({userData.clubsJoined.length})</span></h2>
          </div>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
            <FaUserPlus className="w-5 h-5" />
            <Link to='/clubs'>Join New Club</Link>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {userData.clubsJoined.length == 0 ? (
            <div className="bg-gray-100 px-4 py-6 rounded">
              <p className="text-center text-2xl font-bold">
                You have not jooined any Club
              </p>
            </div>
            ) : userData.clubsJoined.map((club) => (
            <JoinedClubCard key={club.id} club={club} />
          ))}
        </div>


      </div>
    </div>
  );
};

export default MyClubs;
