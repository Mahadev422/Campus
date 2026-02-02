import { FaEdit } from "react-icons/fa";
import { userData } from "../../data/profile";
import StatsCard from "../../components/profile/StatsCard";

const ProfileOverview = () => {
  return (
    <div className="space-y-3">
      {/* Academic Information */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Academic Information
          </h2>
          <button className="text-blue-600 hover:text-blue-700 font-semibold">
            <FaEdit className="w-5 h-5" />
          </button>
        </div>
        <br /><hr /><br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex flex-row gap-3">
              <div className="text-gray-500">University :</div>
              <div className="font-bold text-gray-900">
                {userData.academic.university}
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <div className="text-sm text-gray-500">Degree :</div>
              <div className="font-bold text-gray-900">
                {userData.academic.degree}
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <div className="text-sm text-gray-500">Department :</div>
              <div className="font-bold text-gray-900">
                {userData.academic.department}
              </div>
            </div>
          </div>
<hr />
          <div>
            <div className="flex flex-row gap-3">
              <div className="text-sm text-gray-500">Year :</div>
              <div className="font-bold text-gray-900">
                {userData.academic.year}
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <div className="text-sm text-gray-500">GPA :</div>
              <div className="font-bold text-gray-900">
                {userData.academic.gpa}
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <div className="text-sm text-gray-500">Expected Graduation :</div>
              <div className="font-bold text-gray-900">
                {userData.academic.graduation}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills & Interests */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
    <StatsCard userData={userData} />
      </div>
    </div>
  );
};

export default ProfileOverview;
