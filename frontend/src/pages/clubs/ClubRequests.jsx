import MemberCard from "../../components/club/MemberCard";
import { useClubById, useClubMembers } from "../../store/useClub";
import { useAuth } from "../../store/useAuth";
import { useEffect } from "react";

const ClubRequests = () => {
  const { clubData } = useClubById();
  const { user } = useAuth();
  const { getRequestForJoin, requests, loading } = useClubMembers();

  const admin =
    user && clubData.coordinator.some((member) => member.userId === user._id);

  useEffect(() => {
    getRequestForJoin(clubData._id);
    console.log("ok");
  }, [0]);
  console.log(requests);

  if (!admin)
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-lg bg-red-100 p-4 rounded-md font-medium text-red-600">
          You are not authorized to view this page.
        </p>
      </div>
    );

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Club Requests</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {loading ? (
          <p>Loading...</p>
        ) : requests.length == 0 ? (
          <div>
            <p>No request</p>
          </div>
        ) : (
          requests.map((member) => (
            <div
              key={member._id}
              className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              {/* Profile Image */}
              <img
                src={member.profilePic || "/avatar.png"}
                alt={member.name}
                className="h-12 w-12 rounded-full object-cover ring-1 ring-gray-200"
              />

              {/* Member Info */}
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{member.name}</p>

                <p className="text-sm text-gray-500">
                  {member.academic.department} · {member.academic.degree}
                </p>
              </div>

              {/* CGPA */}
              <div className="text-right">
                <p className="text-xs text-gray-500">CGPA</p>
                <p className="font-semibold text-gray-800">
                  {member.academic.cgpa.$numberDecimal}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ClubRequests;
