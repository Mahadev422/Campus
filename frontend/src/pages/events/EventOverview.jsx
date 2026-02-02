import { FaCheckCircle } from "react-icons/fa";
import { useGetEventById } from "../../store/useEvent";

const EventOverview = () => {
  const { event, loading } = useGetEventById();

  if (loading || Object.keys(event).length == 0) return <p>Loading...</p>;
  return (
    <div className="space-y-8">
      {/* Event Description */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          About This Event
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">{event.description}</p>

          {/* Event Highlights */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Event Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {event.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-blue-50 p-4 rounded-lg"
                >
                  <FaCheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-gray-900">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventOverview;
