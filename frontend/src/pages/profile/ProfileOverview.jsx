import { FiEdit } from "react-icons/fi";
import StatsCard from "../../components/profile/StatsCard";
import { useUser } from "../../store/useUser";
import { useState } from "react";
import Editor from '../../components/home/Editor';
import ShowHtml from '../../components/home/ShowHtml';

const ProfileOverview = () => {
  const { userData, changeBio } = useUser();
  const [edit, setEdit] = useState(false);

  return (
    <div className="space-y-3">
      {/* Academic Information */}
      <div className="bg-white rounded-2xl font-mono shadow-lg p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          About
            <button
              className="cursor-pointer hover:bg-blue-200 p-1 rounded-full"
              onClick={() => setEdit(true)}
            >
              <FiEdit size={22} color="#2563eb" />
            </button>
        </h2>
        {edit ? (
          <Editor
            onSubmit={changeBio}
            set={setEdit}
            initialValue={userData.bio}
          />
        ) : (
          <ShowHtml htmlContent={userData.bio} />
        )}
      </div>

      {/* Skills & Interests */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <StatsCard userData={userData} />
      </div>
    </div>
  );
};

export default ProfileOverview;
