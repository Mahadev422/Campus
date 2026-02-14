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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <ImageUpload 
            set={setUpload} 
            onUpload={upload === 'profile' ? changeProfilePic : changeCoverImage} 
          />
        </div>
      )}

      <div className="relative w-full">
        {/* Cover Image Section */}
        <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 w-full">
          <img
            src={userData.coverImage}
            alt="Profile Cover"
            className="w-full h-full object-cover"
          />
          
          {/* Edit Cover Button */}
          <button
            onClick={() => setUpload('cover')}
            className="absolute top-4 right-4 z-20 p-2 sm:p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Change cover image"
          >
            <FaCamera className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>

        {/* Profile Card - Overlaps Cover Image */}
        <div className="relative px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 md:-mt-24 pb-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              
              {/* Profile Layout - Responsive */}
              <div className="flex flex-col md:flex-row">
                
                {/* Profile Picture Section */}
                <div className="relative flex justify-center md:justify-start p-6 md:p-8 md:w-64 lg:w-80 bg-linear-to-br from-gray-50 to-white">
                  <div className="relative group">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                      <img
                        src={userData.profilePic}
                        alt={userData.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Edit Profile Button */}
                    <button
                      onClick={() => setUpload('profile')}
                      className="absolute bottom-2 right-2 p-2 sm:p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-lg transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                      aria-label="Change profile picture"
                    >
                      <FaCamera className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>

                {/* Information Section */}
                <div className="flex-1 p-6 md:p-8">
                  {/* Name and Title */}
                  <div className="mb-6">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 font-serif">
                      {userData.name}
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 font-medium">
                      {userData.academic?.degree} Student
                    </p>
                  </div>

                  {/* Academic Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Left Column */}
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                            Institution
                          </h3>
                        </div>
                        <div className="space-y-3">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                            <span className="text-xs sm:text-sm text-gray-600">College</span>
                            <span className="text-sm sm:text-base font-semibold text-gray-900">
                              IIT-ISM Dhanbad
                            </span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                            <span className="text-xs sm:text-sm text-gray-600">Department</span>
                            <span className="text-sm sm:text-base font-semibold text-gray-900">
                              {userData.academic?.department}
                            </span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                            <span className="text-xs sm:text-sm text-gray-600">Degree</span>
                            <span className="text-sm sm:text-base font-semibold text-gray-900">
                              {userData.academic?.degree}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                            Academic Progress
                          </h3>
                        </div>
                        <div className="space-y-3">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                            <span className="text-xs sm:text-sm text-gray-600">Semester</span>
                            <span className="text-sm sm:text-base font-semibold text-gray-900">
                              {userData.academic?.semester}
                            </span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                            <span className="text-xs sm:text-sm text-gray-600">CGPA</span>
                            <span className="text-sm sm:text-base font-semibold text-blue-600">
                              {userData.academic?.cgpa.$numberDecimal}
                            </span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                            <span className="text-xs sm:text-sm text-gray-600">Expected Graduation</span>
                            <span className="text-sm sm:text-base font-semibold text-gray-900">
                              {addFourYears(userData?.createdAt)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Social Links Section (Optional - if you want to add) */}
                  {/* <div className="mt-6 flex items-center gap-3">
                    <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <FaLinkedin className="w-5 h-5 text-blue-600" />
                    </button>
                    <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <FaGithub className="w-5 h-5 text-gray-900" />
                    </button>
                  </div> */}

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