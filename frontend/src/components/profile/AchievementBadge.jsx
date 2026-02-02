import { FaMedal } from "react-icons/fa";

const AchievementBadge = ({ achievement }) => {
  return (
    <div className="bg-linear-to-br from-yellow-50 to-orange-50 rounded-xl p-5 text-center border border-yellow-100">
      <div className="mb-3">
        <div className="w-16 h-16 mx-auto bg-linear-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
          
          {/* <achievement.icon className="w-8 h-8 text-white" /> */}
          <FaMedal className="w-8 h-8 text-white" />
        </div>
      </div>
      <h4 className="font-bold text-gray-900">{achievement.title}</h4>
      <p className="text-gray-600 text-sm mt-1">{achievement.description}</p>
      <div className="mt-3 text-sm text-gray-500">{achievement.date}</div>
    </div>
  );
};

export default AchievementBadge;