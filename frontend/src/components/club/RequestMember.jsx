import RequestMenu from "./RequestMenu";

const RequestMember = ({member, admin}) => {
  
  return (
    <div
      key={member._id}
      className="flex justify-between gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md"
    >
      {/* Profile Image */}
      <div className="flex items-center  gap-4">
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
      </div>
      <div>
        <RequestMenu />
      </div>
    </div>
  );
};

export default RequestMember;
