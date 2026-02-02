import { Link } from "react-router-dom";

const JoinedClubCard = ({ club }) => {
  
  return (
    <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-lg bg-blue-100`}>
            <img src={club.logo} alt={club.clubName} className="w-12 h-12 rounded-lg object-cover" />
          </div>
          <Link to={`/clubs/${club._id}`}>
            <h4 className="font-bold hover:text-blue-500 text-xl hover:underline text-gray-900">{club.clubName}</h4>
            <p className="text-gray-600">{club.category}</p>
          </Link>
        </div>
      </div>
      <div className="flex space-x-2">
        <Link to={`/clubs/${club._id}`} className="flex-1 text-center py-2 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-colors">
          View Club
        </Link>
      </div>
    </div>
  );
};

export default JoinedClubCard;