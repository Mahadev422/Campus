import React from "react";
import { FaCertificate, FaUserFriends, FaCalendarCheck, FaMedal, FaChartLine } from "react-icons/fa";
import AchievementBadge from "../../components/profile/AchievementBadge";
import { userData } from "../../data/profile";
import { useUser } from "../../store/useUser";

const MyAchievements = () => {
  const {user} = useUser();

  return (
    <div className="space-y-8">
      {/* Achievements Grid */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Achievements</h2>
            <p className="text-gray-600">Your accomplishments and awards</p>
          </div>
          <div className="text-3xl font-bold text-yellow-600">
            {userData.stats.achievements}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {userData.achievements.map((achievement) => (
            <AchievementBadge key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </div>

      {/* Certificates */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-linear-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center"
            >
              <FaCertificate className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900">Tech Summit 2023</h4>
              <p className="text-gray-600 text-sm mt-1">
                Participation Certificate
              </p>
              <button className="mt-4 px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Recent Activity
        </h2>
        <div className="space-y-6">
          {[
            {
              action: "Joined AI & ML Club",
              date: "2 days ago",
              icon: <FaUserFriends className="w-5 h-5" />,
            },
            {
              action: "Attended Web Dev Workshop",
              date: "1 week ago",
              icon: <FaCalendarCheck className="w-5 h-5" />,
            },
            {
              action: "Earned Tech Star Award",
              date: "2 weeks ago",
              icon: <FaMedal className="w-5 h-5" />,
            },
            {
              action: "Organized Hackathon",
              date: "3 weeks ago",
              icon: <FaChartLine className="w-5 h-5" />,
            },
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-lg">{activity.icon}</div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">
                  {activity.action}
                </div>
                <div className="text-sm text-gray-500">{activity.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAchievements;
