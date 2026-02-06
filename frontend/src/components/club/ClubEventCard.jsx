import { FaCalendarAlt, FaClock, FaTag } from "react-icons/fa";
import { useHelper } from "../../store/useHelper";
import { Link } from "react-router-dom";

const ClubEventCard = ({ event }) => {
  const { formatDate } = useHelper();
  
  return (
    <div
      className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Link to={`/events/${event._id}`} className="text-lg font-semibold hover:text-blue-700 hover:underline text-gray-900">{event.title}</Link>
          <br />
          <p className="mt-1 inline-block rounded-full bg-blue-100 px-3 py-0.5 text-xs font-medium text-blue-700">
            {event.status}
          </p>
          <span>
            <span>
              <p>Seats</p>
              <p>{event.participantsCount} {event.seats == -1 ? '' : `/${event.seats}`}</p>
            </span>
            
          </span>
        </div>

        <span className="flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
          <FaTag className="text-gray-500" />
          {event.eventType}
        </span>
      </div>

      {/* Date & Time */}
      <div className="grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-gray-500" />
          <span className="font-medium text-gray-900">Start:</span>
          <span>{formatDate(event.from.date)}</span>
          <FaClock className="ml-2 text-gray-500" />
          <span>{event.from.time}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-gray-500" />
          <span className="font-medium text-gray-900">End:</span>
          <span>{formatDate(event.to.date)}</span>
          <FaClock className="ml-2 text-gray-500" />
          <span>{event.to.time}</span>
        </div>
      </div>
    </div>
  );
};

export default ClubEventCard;
