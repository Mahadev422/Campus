import { FaCertificate, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { useHelper } from "../../store/useHelper";
import { Link } from "react-router-dom";

const ParticipatedEventCard = ({ event }) => {
  const {isBeforeToday, formatDate} = useHelper();

  return (
    <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div className="flex justify-between items-start mb-3 gap-2">
        <div>
          <Link to={`/events/${event._id}`} className="font-bold hover:text-blue-700 hover:underline text-gray-900">{event.title}</Link>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-sm text-gray-500">{formatDate(event.to.date)}</span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm text-gray-500">{event.to.time}</span>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-xl text-xs font-semibold ${isBeforeToday(event.to.date) ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
          {isBeforeToday(event.to.date)}
        </span>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 text-gray-500">
            <FaMapMarkerAlt className="w-4 h-4" />
            <span className="text-sm">{event.venue}</span>
          </div>
        </div>
        {/* <div className="text-right">
          {event.rating && (
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={`w-4 h-4 ${i < event.rating ? 'text-yellow-500' : 'text-gray-300'}`} />
              ))}
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default ParticipatedEventCard;