import { FaCamera, FaGithub, FaLinkedin } from "react-icons/fa";
import { useUser } from "../../store/useUser";
import { useState } from "react";
import ImageUpload from "../home/ImageUpload";
import { addFourYears } from "../../store/useHelper";

const BasicDetails = () => {
  const { userData, changeProfilePic, changeCoverImage } = useUser();
  const [upload, setUpload] = useState(false);

  return (
    <div className="bg-linear-to-b from-gray-50 to-white">
      {upload && (
        <div className="relative">
          <ImageUpload set={setUpload} onUpload={upload === 'profile' ? changeProfilePic : changeCoverImage} />
        </div>
      )}
      <div className="relative h-120">
          <img
            src={userData.coverImage}
            alt="Profile Cover"
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => setUpload('cover')}
            className="absolute z-10 top-2 right-2 cursor-pointer p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-lg"
          >
            <FaCamera className="w-5 h-5" />
          </button>
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>

        {/* Profile Info Overlay */}
        <div className="bottom-4 left-4 right-4 z-10 absolute">
          <div className="bg-white/50 container mx-auto p-4 rounded-2xl backdrop-blur-xs">
            {/* Profile Picture and Basic Info */}
            <div className="flex relative items-center max-h-80 overflow-hidden bg-gray-50 rounded-2xl">
              <div className=" flex-1">
                <img
                  src={userData.profilePic}
                  alt={userData.name}
                  className="h-full object-contain"
                />
                <button
                  onClick={() => setUpload('profile')}
                  className="absolute cursor-pointer z-10 -bottom-2 -left-2 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-lg"
                >
                  <FaCamera className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-2 md:pl-8 bg-gray-100 rounded-2xl p-4 ">
                <div className="grid gap-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h1 className="text-xl md:text-3xl xl:text-5xl font-bold font-serif text-gray-900">
                      {userData.name}
                    </h1>
                  </div>
                  <div className="lg:text-xl">
                    <div className="grid gap-4">
                      <div className="space-y-3">
                        <div className="flex flex-row gap-3">
                          <div className="text-gray-500">College :</div>
                          <div className="font-bold text-gray-900">
                            IIT-ISM Dhanbad
                          </div>
                        </div>
                        <div className="flex flex-row gap-3">
                          <div className="text-sm text-gray-500">Degree :</div>
                          <div className="font-bold text-gray-900">
                            {userData.academic?.degree}
                          </div>
                        </div>
                        <div className="flex flex-row gap-3">
                          <div className="text-sm text-gray-500">
                            Department :
                          </div>
                          <div className="font-bold text-gray-900">
                            {userData.academic?.department}
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div>
                        <div className="flex flex-row gap-3">
                          <div className="text-sm text-gray-500">
                            Semester :
                          </div>
                          <div className="font-bold text-gray-900">
                            {userData.academic?.semester}
                          </div>
                        </div>
                        <div className="flex flex-row gap-3">
                          <div className="text-sm text-gray-500">CGPA :</div>
                          <div className="font-bold text-gray-900">
                            {userData.academic?.cgpa.$numberDecimal}
                          </div>
                        </div>
                        <div className="flex flex-row gap-3">
                          <div className="text-sm text-gray-500">
                            Expected Graduation :
                          </div>
                          <div className="font-bold text-gray-900">
                            {addFourYears(userData?.createdAt)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
