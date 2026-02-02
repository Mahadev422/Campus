import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

const ScheduleItem = ({ schedule }) => {
  return (
    <div className="flex space-x-4">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
          <FaClock className="w-6 h-6 text-blue-600" />
        </div>
        <div className="flex-1 w-px bg-gray-200 my-2"></div>
      </div>
      <div className="flex-1 pb-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h4 className="font-bold text-gray-900">{schedule.time}</h4>
            <h3 className="text-lg font-bold text-gray-900">
              {schedule.title}
            </h3>
          </div>
          {schedule.speaker && (
            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
              {schedule.speaker}
            </span>
          )}
        </div>
        <p className="text-gray-600">{schedule.description}</p>
        {schedule.location && (
          <div className="flex items-center space-x-2 mt-2 text-gray-500">
            <FaMapMarkerAlt className="w-4 h-4" />
            <span className="text-sm">{schedule.location}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleItem;