import { FaCamera } from "react-icons/fa";
import { useUser } from "../../store/useUser";
import { useState } from "react";
import ImageUpload from "../home/ImageUpload";

const BasicDetails = () => {
  const { userData, changeProfilePic } = useUser();
  const [upload, setUpload] = useState(false);

  return (
    <div className="relative">
      {/* Cover Photo */}
      {/* <div> */}
        {upload && <div className="relative"><ImageUpload set={setUpload} onUpload={changeProfilePic} /></div>}
      {/* </div> */}
      <div className="h-64 md:h-80 overflow-hidden">
        <img
          src={userData.coverImage}
          alt="Profile Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Profile Info Overlay */}
      <div className="px-6 relative -mt-24">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Profile Picture and Basic Info */}
            <div className="flex items-start justify-evenly space-x-4">
              <div className="relative flex-1 w-full">
                <img
                  src={userData.profilePic}
                  alt={userData.name}
                  className="w-screen rounded-2xl object-cover border-8 border-white shadow-2xl"
                />
                <button onClick={() => setUpload(true)} className="absolute -bottom-3 -right-3 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-lg">
                  <FaCamera className="md:w-5 md:h-5 h-3 w-3" />
                </button>
              </div>

              <div className="flex-2">
                <div className="pt-2 grid text-2xl">
                  <div className="flex items-center space-x-3 mb-2">
                    <h1 className="text-2xl md:text-5xl font-bold font-serif text-gray-900">
                      {userData.name}
                    </h1>
                  </div>
                  <p className="text-gray-700 font-mono text-xs mb-6 sm:text-2xl lg:3xl no-scroll max-h-30 overflow-y-auto">{userData.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
