import { FaCertificate, FaMapMarkerAlt, FaStar } from "react-icons/fa";

const ParticipatedEventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h4 className="font-bold text-gray-900">{event.title}</h4>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-sm text-gray-500">{event.date}</span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm text-gray-500">{event.time}</span>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${event.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
          {event.status}
        </span>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-600 text-sm line-clamp-2">{event.description}</p>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 text-gray-500">
            <FaMapMarkerAlt className="w-4 h-4" />
            <span className="text-sm">{event.location}</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-500">
            <FaCertificate className="w-4 h-4" />
            <span className="text-sm">{event.certificate ? 'Certificate' : 'No Certificate'}</span>
          </div>
        </div>
        <div className="text-right">
          {event.rating && (
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={`w-4 h-4 ${i < event.rating ? 'text-yellow-500' : 'text-gray-300'}`} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParticipatedEventCard;