import { FaEdit } from "react-icons/fa";
import StatsCard from "../../components/profile/StatsCard";
import { useUser } from "../../store/useUser";
import { useHelper } from "../../store/useHelper";

const ProfileOverview = () => {
  const { userData } = useUser();
  const { addFourYears } = useHelper();
  return (
    <div className="space-y-3">
      {/* Academic Information */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex justify-between items-center pb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Academic Information
          </h2>
        </div>
        <div className="grid gap-4">
          <div className="space-y-3">
            <div className="flex flex-row gap-3">
              <div className="text-gray-500">College :</div>
              <div className="font-bold text-gray-900">IIT-ISM Dhanbad</div>
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
              <div className="text-sm text-gray-500">Semester :</div>
              <div className="font-bold text-gray-900">
                {userData.academic.semester}
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <div className="text-sm text-gray-500">CGPA :</div>
              <div className="font-bold text-gray-900">
                {userData.academic.cgpa.$numberDecimal}
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <div className="text-sm text-gray-500">Expected Graduation :</div>
              <div className="font-bold text-gray-900">
                {addFourYears(userData.createdAt)}
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
