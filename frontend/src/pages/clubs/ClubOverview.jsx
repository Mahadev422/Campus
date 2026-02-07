import { Link } from "react-router-dom";
import { useClubById } from "../../store/useClub";
import { MdAdminPanelSettings } from "react-icons/md";
import { useState } from "react";
import Editor from "../../components/home/Editor";
import { useAuth } from "../../store/useAuth";
import { FiEdit } from "react-icons/fi";
import ShowHtml from "../../components/home/ShowHtml";

const ClubOverview = () => {
  const { clubData, loading, changeClubDescription } = useClubById();
  const { user } = useAuth();

  const [edit, setEdit] = useState(false);

  const admin =
    user && clubData?.coordinator?.some((member) => member.userId === user._id);

  if (loading || Object.keys(clubData).length == 0) return <p>Loading...</p>;

  return (
    <div className="space-y-8">
      {/* Club Description */}

      <div className="bg-white rounded-2xl font-mono shadow-lg p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          About the Club{" "}
          {admin && (
            <button
              className="cursor-pointer hover:bg-blue-200 p-1 rounded-full"
              onClick={() => setEdit(true)}
            >
              <FiEdit size={22} color="#2563eb" />
            </button>
          )}
        </h2>
        {edit ? (
          <Editor
            onSubmit={changeClubDescription}
            set={setEdit}
            initialValue={clubData.description}
          />
        ) : (
          <ShowHtml htmlContent={clubData.description} />
        )}
      </div>

      {/* Coordinators Section */}
      <div className="bg-white grid gap-4 rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Club Coordinators ({clubData.coordinator.length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clubData.coordinator.map((coordinator) => (
            <div
              key={coordinator._id}
              className="bg-linear-to-br from-blue-50 to-purple-50 rounded-xl p-2"
            >
              <div className="flex items-center gap-1">
                <MdAdminPanelSettings className="h-15 w-15" />
                <div>
                  <Link
                    to={`/profile/${clubData._id}`}
                    className="font-bold text-gray-900"
                  >
                    {coordinator.name}
                  </Link>
                  <p className="text-red-400 font-semibold">
                    {coordinator.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClubOverview;
