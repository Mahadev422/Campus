import React from "react";
import ScheduleItem from "../../components/event/ScheduleItem";

const EventSchedule = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Event Schedule</h2>
        <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
          Download Schedule
        </button>
      </div>

      {/* <div className="space-y-1">
        {eventData.schedule.map((item, index) => (
          <ScheduleItem key={index} schedule={item} />
        ))}
      </div> */}
    </div>
  );
};

export default EventSchedule;
