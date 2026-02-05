import { FaClosedCaptioning, FaRegClosedCaptioning, FaShareAlt, FaTicketAlt } from "react-icons/fa";
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { useGetEventById } from "../../store/useEvent";
import { useHelper } from "../../store/useHelper";
import { useAuth } from "../../store/useAuth";
import ButtonLoader from '../../components/loaders/ButtonLoader';


const EventBasicInfo = () => {
  const { event, loading, addParticipant, addParticipantLoader, cancelParticipant } = useGetEventById();
  const { formatDate, isBeforeToday } = useHelper();
  const { user } = useAuth();


  if (loading || Object.keys(event).length == 0) return <p>Loading...</p>;
  const participant =
    user && event.participants.some((member) => member === user._id);
  return (
    <div className="px-6 relative -mt-48">
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-4">
              <span className="px-4 capitalize py-2 bg-blue-600 text-white rounded-full font-semibold">
                {event.eventType}
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">
                {isBeforeToday(event.to.date)}
              </span>
            </div>

            <h1 className="text-4xl font-serif md:text-5xl font-bold text-gray-900 mb-4">
              {event.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8">{event.tagline}</p>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
              <div className="bg-gray-200 p-3 rounded-md">
                <h1 className="font-bold font-serif">Starting</h1>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-100 rounded-xl">
                    <HiOutlineCalendar className="w-7 h-7 text-blue-600" />
                  </div>
                  <div className="text-sm">
                    <div className="text-gray-500">Date</div>
                    <div className="font-bold text-gray-900">
                      {formatDate(event.from.date)}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-purple-100 rounded-xl">
                    <HiOutlineClock className="w-7 h-7 text-purple-600" />
                  </div>
                  <div className="text-sm">
                    <div className=" text-gray-500">Time</div>
                    <div className="font-bold text-gray-900">
                      {event.from.time}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-200 p-3 rounded-md">
                <h1 className="font-bold font-serif">Ending</h1>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-100 rounded-xl">
                    <HiOutlineCalendar className="w-7 h-7 text-blue-600" />
                  </div>
                  <div className="text-sm">
                    <div className="text-gray-500">Date</div>
                    <div className="font-bold text-gray-900">
                      {formatDate(event.to.date)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-purple-100 rounded-xl">
                    <HiOutlineClock className="w-7 h-7 text-purple-600" />
                  </div>
                  <div className="text-sm">
                    <div className=" text-gray-500">Time</div>
                    <div className="font-bold text-gray-900">
                      {event.to.time}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-green-100 rounded-xl">
                  <HiOutlineLocationMarker className="w-7 h-7 text-green-600" />
                </div>
                <div className="text-sm">
                  <div className="text-gray-500">Venue</div>
                  <div className="font-bold  text-gray-900 line-clamp-1">
                    {event.venue}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-2 bg-orange-100 rounded-xl">
                  <HiOutlineUserGroup className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-sm">
                  <div className="text-gray-500">Capacity</div>
                  <div className="font-bold text-gray-900">
                    {event.participants.length}
                    {event.seats == -1 ? "" : `/${event.seats}`}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between gap-4">
            <div className="grid grid-cols-2 gap-2">
              {participant ? (
                <button
                onClick={() => cancelParticipant(event._id)}
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2
                  bg-red-300 text-red-700
                `}
                >
                  <span>{addParticipantLoader ? <ButtonLoader /> : '✕ Cancel'}</span>
                </button>
              ) : (
                <button
                  onClick={() => addParticipant(event._id)}
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 
                    bg-linear-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl
                `}
                >
                  <FaTicketAlt className="w-6 h-6" />
                  <span>{addParticipantLoader ? <ButtonLoader /> : 'Register Now'}</span>
                </button>
              )}
              <div className="flex space-x-3">
                <button className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center justify-center space-x-2">
                  <FaShareAlt className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBasicInfo;
