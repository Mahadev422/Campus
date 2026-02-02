import MemberCard from "../../components/club/MemberCard";
import { useClubById } from "../../store/useClub";
import { useAuth } from "../../store/useAuth";

const ClubRequests = () => {
  const {clubData} = useClubById();
  const {user} = useAuth();

  const admin = user && clubData.coordinator.some(
  member => member.userId === user._id);
  if(!admin) return (<div>
    <p>You are not admin</p>
  </div>);
  const member = clubData.members;
  console.log(member)
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Club Requests</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {clubData.members.length == 0 ? <div>
          <p>No request</p>
        </div> : clubData.members.map((member) => (
          <MemberCard key={member._id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default ClubRequests;
