
import ParticipatedEventCard from "../../components/profile/ParticipatedEventCard";
import { FaPlus } from "react-icons/fa";
import { useUser } from "../../store/useUser";
import { Link } from "react-router-dom";

const MyEvents = () => {
  const { userData } = useUser();

  if (Object.keys(userData).length == 0) return <p>Loading...</p>;
  return (
    <div className="space-y-8">
      {/* Participated Events */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Events History</h2>
          </div>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
            <FaPlus className="w-5 h-5" />
            <Link to="/events">New Events</Link>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {userData.eventsParticipated.length == 0 ? (
            <div className="bg-gray-100 px-4 py-6 rounded">
              <p className="text-center text-2xl font-bold">
                You have not participated in any Event
              </p>
            </div>
          ) : (
            userData.eventsParticipated.map((event) => (
              <ParticipatedEventCard key={event.id} event={event} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyEvents;
