import { FaStar } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useHelper } from "../../store/useHelper";
import StatusCard from "./StatusCard";

const ClubCard = ({ club }) => {
  const { getCategoryIcon, firstCapital } = useHelper();

  const Icon = getCategoryIcon(club.category);
  
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
      {/* Club Header */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-4">
            <div className="p-4 rounded-xl bg-blue-100 text-red-600">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <Link
                to={`${club._id}`}
                className="text-xl font-bold text-gray-900 hover:underline hover:text-blue-700"
              >
                {club.clubName}
              </Link>
              <div className="flex items-center space-x-2 mt-1">
                <span
                  className={`px-3 py-1 rounded-md font-semibold bg-green-400`}
                >
                  {firstCapital(club.category)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Club Description */}
        <p className="text-gray-600 mb-6 line-clamp-2">{club.description}</p>

        {/* Club Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="grid text-center border-gray-200">
            <div className="flex items-center justify-center space-x-2 text-gray-500 mb-1">
              <HiOutlineUsers className="w-4 h-4" />
              <span className="text-sm">Status</span>
            </div>
            <div>
              <StatusCard status={club.approved} />
            </div>
          </div>
          <div className="text-center border-gray-200">
            <div className="flex items-center justify-center space-x-2 text-gray-500 mb-1">
              <HiOutlineUsers className="w-4 h-4" />
              <span className="text-sm">Members</span>
            </div>
            <div className="font-bold text-gray-900">{club.membersCount}</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 text-gray-500 mb-1">
              <span className="text-sm">Rating</span>
            </div>
            <div className="flex items-center justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`w-4 h-4 ${i < club.rating ? "text-yellow-500" : "text-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Club Footer - Recent Activity */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Recent: </span>
            <span className="font-medium">{club.recent}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubCard;
