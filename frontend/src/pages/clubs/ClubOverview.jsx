import { Link } from "react-router-dom";
import ClubAchievement from "../../components/club/ClubAchievement";
import { useClubById } from "../../store/useClub";
import { MdAdminPanelSettings } from "react-icons/md";

const ClubOverview = () => {
  const {clubData} = useClubById();

  if(Object.keys(clubData).length == 0) return <p>Loading...</p>

  return (
    <div className="space-y-8">
      {/* Club Description */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          About the Club
        </h2>
        <p className="text-gray-700 mb-6">{clubData.description}</p>

        {/* Achievements */}
        <ClubAchievement />
      </div>

      {/* Coordinators Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Club Coordinators
          </h2>
          <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg font-semibold">
            {clubData.coordinator.length} Coordinators
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clubData.coordinator.map((coordinator) => (
            <div
              key={coordinator._id}
              className="bg-linear-to-br from-blue-50 to-purple-50 rounded-xl p-2"
            >
              <div className="flex items-center gap-1">
                <MdAdminPanelSettings className="h-15 w-15" />
                <div>
                  <Link to={`/profile/${clubData._id}`} className="font-bold text-gray-900">
                    {coordinator.name}
                  </Link>
                  <p className="text-red-400 font-semibold">
                    {coordinator.role}
                  </p>
                  <div className="flex items-center space-x-2 mt-1">
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClubOverview;
