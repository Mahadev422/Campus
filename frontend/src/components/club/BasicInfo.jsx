import { FaCamera, FaShareAlt, FaUserPlus, FaUsers } from "react-icons/fa";

import { useAuth } from "../../store/useAuth";
import StatusCard from "./StatusCard";
import { useClubById } from "../../store/useClub";
import { useState } from "react";
import ImageUpload from "../home/ImageUpload";

const BasicInfo = ({ clubData, admin }) => {
  const { user } = useAuth();
  const { joinClub, joinLoading, changeClubLogo } = useClubById();

  const [upload, setUpload] = useState(false);

  const member =
    user &&
    [...clubData.coordinator, ...clubData.members].some(
      (member) => member.userId === user._id,
    );

  const request =
    user && clubData.requestForJoin.some((req) => req === user._id);

  return (
    <div className="px-4 md:px-6 top-60">
      {upload && <ImageUpload set={setUpload} onUpload={changeClubLogo} />}
      <div className="bg-white relative rounded-xl shadow-2xl p-4 md:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex space-x-4">
            <div className="relative">
              <img
                src={clubData.logo}
                alt={clubData.clubName}
                className="w-25 h-25 md:w-40 md:h-40 rounded-2xl object-cover border-8 border-white shadow-2xl"
              />
              <div className="absolute -left-2 -top-2 bg-yellow-500 text-white p-2 rounded-full">
                <FaUsers className="w-6 h-6" />
              </div>
              {admin && <button onClick={() => setUpload(true)} className="absolute z-10 cursor-pointer -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full"><FaCamera className="w-5 h-5" /></button>}
            </div>
            <div className="overflow-hidden">
              <div className="flex flex-wrap items-center space-x-3 mb-2">
                <h1 className="text-3xl font-serif md:text-4xl font-bold text-gray-900">
                  {clubData.clubName}
                </h1>
                <span className="px-4 py-1 capitalize bg-blue-100 text-blue-600 rounded-full font-semibold">
                  {clubData.category}
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
                className={`md:px-6 md:py-3 px-3 py-2 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2
                bg-gray-100 text-gray-700`}
              >
                <FaUserPlus className="w-5 h-5" />
                <span>Member ✓</span>
              </span>
            ) : request ? (
              <span
                className={`md:px-6 md:py-3 px-3 py-2 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2
                bg-gray-300 text-gray-700`}
              >
                <FaUserPlus className="w-5 h-5" />
                <span>Request ✓</span>
              </span>
            ) : (
              <button
                onClick={() => joinClub(clubData._id)}
                disabled={joinLoading}
                className="relative px-3 py-2 md:px-6 md:py-3 rounded-xl font-semibold transition-all duration-300
             flex items-center justify-center gap-2
             bg-linear-to-r from-yellow-600 to-green-600 text-white
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
            <button className="md:px-6 md:py-3 px-3 py-2 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center justify-center space-x-2">
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
