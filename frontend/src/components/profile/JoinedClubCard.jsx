import { Link } from "react-router-dom";

const JoinedClubCard = ({ club }) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-lg bg-blue-100`}>
            <img src={club.logo} alt={club.name} className="w-12 h-12 rounded-lg object-cover" />
          </div>
          <Link to={`/clubs/${club.id}`}>
            <h4 className="font-bold hover:text-blue-500 hover:underline text-gray-900">{club.name}</h4>
            <p className="text-gray-600 text-sm">{club.category}</p>
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          {club.isAdmin && (
            <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded">
              Admin
            </span>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <div className="text-sm text-gray-500">Joined</div>
          <div className="font-semibold">{club.joinedDate}</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500">Role</div>
          <div className="font-semibold">{club.role}</div>
        </div>
      </div>
      
      <div className="flex space-x-2">
        <Link to={`/clubs/${club.id}`} className="flex-1 text-center py-2 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-colors">
          View Club
        </Link>
      </div>
    </div>
  );
};

export default JoinedClubCard;