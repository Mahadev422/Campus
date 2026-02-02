import { FaSearch } from "react-icons/fa";
import MemberCard from "../../components/club/MemberCard";
import { useClubById } from "../../store/useClub";

const ClubMembers = () => {
  const {clubData} = useClubById();
  const members = [...clubData.coordinator, ...clubData.members]
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Club Members</h2>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search members..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {members.length == 0 ? <div>
          <p>No member join right now</p>
        </div> : members.map((member) => (
          <MemberCard key={member._id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default ClubMembers;
