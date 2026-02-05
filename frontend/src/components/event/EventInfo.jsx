import { Link } from "react-router-dom";
import { useGetEventById } from "../../store/useEvent";
import { useHelper } from "../../store/useHelper";

const EventInfo = () => {
  const { event, loading } = useGetEventById();
  const { formatDate } = useHelper();

  if (loading || Object.keys(event).length === 0) return <p>Loading...</p>;
  return (
    <div className="block">
      <div className="bg-white rounded-2xl shadow-lg p-4 mb-4">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          Organizer Details
        </h2>
        <div className="bg-gray-50 p-4 text-gray-600">
          <div className="flex justify-between">
            <span>Club Name: </span>
            <Link to={`/clubs/${event.organizedBy.clubId}`} className="text-blue-700 hover:underline font-bold">{event.organizedBy.clubName}</Link>
          </div>
          <div className="flex justify-between">
            <span>Organizer Name</span>
            <span className="text-blue-700 font-bold">{event.createdBy.name}</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-4 mb-4">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          Registration Details
        </h2>
        <div className="grid p-4 rounded-md bg-gray-50 grid-cols-1 md:grid-cols-2 gap-2">
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
                {event.seats === -1
                  ? "No Limit"
                  : `${event.seats - event.participants.length}  remaining`}
              </span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
