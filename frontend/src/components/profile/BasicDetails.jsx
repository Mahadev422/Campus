import React from "react";
import { FaCamera, FaEdit, FaGraduationCap, FaShareAlt } from "react-icons/fa";
import { HiOutlineAcademicCap, HiOutlineLocationMarker } from "react-icons/hi";
import { userData } from "../../data/profile";
import { useUser } from "../../store/useUser";

const BasicDetails = () => {
  const { user } = useUser();
  // console.log(user);
  const userData = { ...user };
  return (
    <div className="relative">
      {/* Cover Photo */}
      <div className="h-64 md:h-80 overflow-hidden">
        <img
          src={userData.coverImage}
          alt="Profile Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Profile Info Overlay */}
      <div className="container mx-auto px-6 relative -mt-24">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Profile Picture and Basic Info */}
            <div className="flex items-start justify-evenly space-x-6">
              <div className="relative flex-1 align-middle">
                <img
                  src={userData.profilePic}
                  alt={userData.name}
                  className="w-100 rounded-2xl object-cover border-8 border-white shadow-2xl"
                />
                <button className="absolute -bottom-3 -right-3 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-lg">
                  <FaCamera className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-2">
                <div className="pt-2">
                  <div className="flex items-center space-x-3 mb-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                      {userData.name}
                    </h1>
                  </div>
                  <p className="text-gray-700 mb-6 md:text-2xl max-w-2xl">{userData.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
