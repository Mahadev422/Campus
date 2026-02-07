import {
  FaStar,
  FaUsers,
} from "react-icons/fa";
import {
  HiOutlineCalendar,
  HiOutlineClock,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import { useHelper } from "../../store/useHelper";

const EventCard = ({ event }) => {

  const { getEventTypeIcon, formatDate, firstCapital } = useHelper();
  const Icon = getEventTypeIcon(event.eventType);

  const getStatusBadge = (status) => {
    const styles = {
      upcoming: "bg-green-100 text-green-800",
      ongoing: "bg-blue-100 text-blue-800",
      past: "bg-gray-100 text-gray-800",
      cancelled: "bg-red-100 text-red-800",
    };
    return (
      <span
        className={`px-3 py-1 capitalize rounded-full text-xs font-semibold ${styles[status]}`}
      >
        {status}
      </span>
    );
  };
  
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <Link to={`/events/${event._id}`}>
          <img
            src={event.coverImage}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
        <div className="absolute bottom-4 left-4">
          {getStatusBadge(event.status)}
        </div>
      </div>

      {/* Event Content */}
      <div className="p-4">
        {/* Event Type */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className={`p-2 rounded-lg bg-blue-200`}>
              <Icon className="w-5 h-5" />
            </div>
            <span
              className={`text-sm font-semibold bg-green-200 px-2 py-1 rounded-xl font-serif`}
            >
              {firstCapital(event.eventType)}
            </span>
          </div>

          <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-md">
            {event.fee == 0 ? "FREE" : `₹ ${event.fee}/-`}
          </span>
        </div>

        {/* Event Title */}
        <Link
          to={`${event._id}`}
          className="text-xl hover:text-blue-600 hover:underline font-bold text-gray-900 mb-3 line-clamp-1"
        >
          {event.title}
        </Link>

        {/* Event Details Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Date Time */}
          <div className="grid bg-green-200 rounded-lg py-2 px-4">
            <h1 className="font-semibold">Start From:</h1>

            <div className="flex items-center space-x-3">
              <div className="p-1 bg-blue-50 rounded-lg">
                <HiOutlineCalendar className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Date</div>
                <div className="font-semibold text-sm text-gray-900">
                  {formatDate(event.from.date)}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-1 bg-purple-50 rounded-lg">
                <HiOutlineClock className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Time</div>
                <div className="font-semibold text-sm text-gray-900">
                  {event.from.time}
                </div>
              </div>
            </div>
          </div>
          <div className="grid bg-red-200 rounded-lg py-2 px-4">
            <h1 className="font-semibold">End At:</h1>
            <div className="flex items-center space-x-3">
              <div className="p-1 bg-blue-50 rounded-lg">
                <HiOutlineCalendar className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Date</div>
                <div className="font-semibold text-sm text-gray-900">
                  {formatDate(event.to.date)}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-1 bg-purple-50 rounded-lg">
                <HiOutlineClock className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Time</div>
                <div className="font-semibold text-sm text-gray-900">
                  {event.to.time}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Footer */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-gray-600">
              <FaUsers className="w-4 h-4" />
              <span className="text-sm">
                {event.participantsCount}{Number(event.seats) === -1 ? '': `/${event.seats}`} registered
              </span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600">
              <FaStar className="w-4 h-4 text-yellow-500" />
              <span className="text-sm">{event.rating}</span>
            </div>
          </div>
          <div className="text-sm text-gray-500">{event.duration}</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
