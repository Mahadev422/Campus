import { useGetEventById } from "../../store/useEvent";
import { useHelper } from "../../store/useHelper";

const EventInfo = () => {
  const {event, loading} = useGetEventById();
  const {formatDate} = useHelper();

  if(loading || Object.keys(event).length === 0) return <p>Loading...</p>
  return (
    <div className="block">
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Registration Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Registration Information
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Registration Fee:</span>
                <span className="font-bold text-lg">
                  {event.registrationDetail.fee === 0
                    ? "FREE"
                    : `$${event.registrationDetail.fee}`}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Registration Deadline:</span>
                <span className="font-bold">
                  {formatDate(event.deadline) || formatDate(event.from.date)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Available Spots:</span>
                <span className="font-bold">
                  {event.seats === -1 ? 'No Limit' : (`${event.seats -
                    event.participants.length}  remaining`)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Venue Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="text-sm text-gray-500">Building & Room</div>
                  <div className="font-medium">
                    {eventData.venue.building}, {eventData.venue.room}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaUsers className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="text-sm text-gray-500">Capacity</div>
                  <div className="font-medium">
                    {eventData.venue.capacity} people
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaClock className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="text-sm text-gray-500">Duration</div>
                  <div className="font-medium">{eventData.duration}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default EventInfo;
