import { useHelper } from "../../store/useHelper";
import { FaUserShield, FaUsers } from "react-icons/fa";

const MemberCard = ({ member }) => {
  const { formatDate, firstCapital } = useHelper();

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-md transition hover:shadow-lg">
      <div className="flex items-center gap-4">
        {/* Role Icon */}
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full
        ${
          member.role === "coordinator"
            ? "bg-purple-100 text-purple-700"
            : "bg-green-100 text-green-700"
        }`}
        >
          {member.role === "coordinator" ? (
            <FaUserShield className="text-xl" />
          ) : (
            <FaUser className="text-xl" />
          )}
        </div>

        {/* Name & Role */}
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900">{member.name}</h4>
          <p className="text-sm text-gray-500">{firstCapital(member.role)}</p>
        </div>

        {/* Joined Date */}
        <div className="text-right">
          <p className="text-xs text-gray-500">Joined</p>
          <p className="text-sm font-medium text-gray-700">
            {formatDate(member.createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
