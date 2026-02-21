import { useState } from 'react';
import { FaCalendar,  FaClock, FaMapPin, FaVideo, FaMicrophone, FaCheckCircle, FaTimesCircle, FaExclamationCircle, FaHistory, FaUsers } from 'react-icons/fa';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('resources');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [bookingType, setBookingType] = useState('auto');

  // Sample data for demonstration
  const resources = {
    rooms: [
      { id: 1, name: 'Lecture Hall A', capacity: 100, type: 'hall', equipment: ['Projector', 'Sound System'] },
      { id: 2, name: 'Conference Room B', capacity: 30, type: 'room', equipment: ['Monitor', 'Video Conference'] },
      { id: 3, name: 'Computer Lab C', capacity: 40, type: 'lab', equipment: ['Computers', 'Projector'] },
    ],
    equipment: [
      { id: 4, name: 'HD Projector', category: 'projector', available: 5 },
      { id: 5, name: 'Professional Camera', category: 'camera', available: 3 },
      { id: 6, name: 'Sound System', category: 'audio', available: 2 },
    ]
  };

  const timeSlots = [
    '08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00',
    '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00',
    '16:00 - 17:00', '17:00 - 18:00'
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Campus Resource Management System</h1>
        <p className="text-gray-600">Centralized management and booking platform</p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-4 mb-6 border-b">
        {['resources', 'booking', 'history', 'analytics'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium capitalize transition-colors relative ${
              activeTab === tab 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Resources Overview */}
        <div className="lg:col-span-1 space-y-6">
          {/* Rooms and Halls Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center">
                <FaMapPin className="w-5 h-5 mr-2 text-blue-500" />
                Rooms & Halls
              </h2>
              <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                {resources.rooms.length} available
              </span>
            </div>
            <div className="space-y-3">
              {resources.rooms.map((room) => (
                <div key={room.id} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{room.name}</h3>
                      <p className="text-sm text-gray-500">Capacity: {room.capacity} people</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {room.equipment.map((item, index) => (
                          <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      room.type === 'hall' ? 'bg-purple-100 text-purple-600' :
                      room.type === 'lab' ? 'bg-green-100 text-green-600' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      {room.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center">
                <FaUsers className="w-5 h-5 mr-2 text-green-500" />
                Equipment
              </h2>
            </div>
            <div className="space-y-3">
              {resources.equipment.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    {item.category === 'projector' && <FaUsers className="w-4 h-4 text-gray-500" />}
                    {item.category === 'camera' && <FaVideo className="w-4 h-4 text-gray-500" />}
                    {item.category === 'audio' && <FaMicrophone className="w-4 h-4 text-gray-500" />}
                    <span>{item.name}</span>
                  </div>
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                    {item.available} available
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Booking Features */}
        <div className="lg:col-span-2 space-y-6">
          {/* Booking Interface */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FaCalendar className="w-5 h-5 mr-2 text-blue-500" />
              Time-Slot Booking
            </h2>
            
            {/* Date Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Approval Type Toggle */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Booking Type</label>
              <div className="flex space-x-4">
                <button
                  onClick={() => setBookingType('auto')}
                  className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center space-x-2 ${
                    bookingType === 'auto' 
                      ? 'bg-green-100 text-green-700 border-2 border-green-500' 
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <FaCheckCircle className="w-4 h-4" />
                  <span>Auto-Approved</span>
                </button>
                <button
                  onClick={() => setBookingType('approval')}
                  className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center space-x-2 ${
                    bookingType === 'approval' 
                      ? 'bg-yellow-100 text-yellow-700 border-2 border-yellow-500' 
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <FaUsers className="w-4 h-4" />
                  <span>Approval Required</span>
                </button>
              </div>
            </div>

            {/* Time Slots with Conflict Detection */}
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Available Time Slots</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {timeSlots.map((slot, index) => {
                  // Simulate some conflicts for demonstration
                  const hasConflict = index === 3 || index === 7;
                  const isBooked = index === 1 || index === 4;
                  
                  return (
                    <button
                      key={slot}
                      disabled={isBooked}
                      className={`p-2 text-sm rounded-lg border transition-colors relative ${
                        isBooked 
                          ? 'bg-red-50 text-red-400 cursor-not-allowed border-red-200'
                          : hasConflict
                          ? 'bg-yellow-50 text-yellow-700 border-yellow-300 hover:bg-yellow-100'
                          : 'bg-green-50 text-green-700 border-green-300 hover:bg-green-100'
                      }`}
                    >
                      <div className="flex items-center justify-center space-x-1">
                        <FaClock className="w-3 h-3" />
                        <span>{slot}</span>
                      </div>
                      {hasConflict && (
                        <span className="absolute -top-2 -right-2">
                          <FaExclamationCircle className="w-4 h-4 text-yellow-500" />
                        </span>
                      )}
                      {isBooked && (
                        <span className="absolute -top-2 -right-2">
                          <FaTimesCircle className="w-4 h-4 text-red-500" />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
              <div className="flex items-center space-x-4 mt-3 text-xs">
                <div className="flex items-center"><div className="w-3 h-3 bg-green-100 border border-green-300 rounded mr-1"></div> Available</div>
                <div className="flex items-center"><div className="w-3 h-3 bg-yellow-100 border border-yellow-300 rounded mr-1"></div> Conflict Detected</div>
                <div className="flex items-center"><div className="w-3 h-3 bg-red-100 border border-red-200 rounded mr-1"></div> Booked</div>
              </div>
            </div>

            {/* Booking Button */}
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Book Selected Resource
            </button>
          </div>

          {/* Booking History and Logs */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FaHistory className="w-5 h-5 mr-2 text-purple-500" />
              Recent Booking History
            </h2>
            
            <div className="space-y-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="border-l-4 border-blue-500 pl-4 py-2 bg-gray-50 rounded-r-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Lecture Hall A • 10:00 - 12:00</p>
                      <p className="text-sm text-gray-500">Booked by Prof. Smith • {selectedDate}</p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                      Completed
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 mt-2 text-xs text-gray-500">
                    <span>Equipment: Projector, Sound System</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Usage Summary */}
            <div className="mt-4 pt-4 border-t">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Usage Statistics</h3>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-blue-50 p-2 rounded">
                  <p className="text-lg font-bold text-blue-600">24</p>
                  <p className="text-xs text-gray-600">Bookings Today</p>
                </div>
                <div className="bg-green-50 p-2 rounded">
                  <p className="text-lg font-bold text-green-600">85%</p>
                  <p className="text-xs text-gray-600">Utilization</p>
                </div>
                <div className="bg-purple-50 p-2 rounded">
                  <p className="text-lg font-bold text-purple-600">12</p>
                  <p className="text-xs text-gray-600">Pending</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;