import { useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaGlobe
} from "react-icons/fa";
import {
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineUserGroup,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineGlobe,
} from "react-icons/hi";

import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import BasicDetails from "../../components/profile/BasicDetails";
import { useUser } from "../../store/useUser";
import { useAuth, useLogin } from "../../store/useAuth";
import CirclesLoader from "../../components/loaders/CirclesLoader";
import { IoMdSettings } from "react-icons/io";
// Main Profile Page Component
const Me = () => {
  const { getMyData, userData, loading } = useUser();
  const { user, userLoader } = useAuth();

  const path = useLocation().pathname.split('/')[2];

  useEffect(() => {
    getMyData();
  }, [0]);

  if (loading || userLoader) return <CirclesLoader />;
  if (!user) return <Navigate to="/login" />;

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Profile Cover Section */}
      <BasicDetails />

      {/* Main Content */}
      <div className="px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Right Column - Main Content */}
          <div className="lg:w-3/4">
            {/* Navigation Tabs */}
            <div className="bg-white rounded-md shadow-md mb-8 overflow-hidden">
              <div className="flex justify-around no-scroll overflow-x-auto py-2">
                {[
                  { link: "", label: "Overview", icon: HiOutlineUser },
                  { link: "clubs", label: "Clubs", icon: HiOutlineUserGroup },
                  { link: "events", label: "Events", icon: HiOutlineCalendar },
                  {
                    link: "settings",
                    label: "Settings",
                    icon: IoMdSettings,
                  },
                ].map((tab, i) => {
                  const Icon = tab.icon;
                  return (
                    <Link
                      to={`${tab.link}`}
                      key={i}
                      className={`flex items-center ${tab.link === (path ? path : "") ? 'bg-blue-400 text-white': ''} space-x-2 px-3 rounded-md py-2 font-semibold whitespace-nowrap transition-colors 
                          text-gray-600 hover:bg-blue-500
                      `}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{tab.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Tab Content */}
            <Outlet />
          </div>
          {/* Left Column - Stats & Info */}
          <div className="lg:w-1/4 space-y-6">
            {/* Contact Information */}
            <div className="bg-white grid gap-4 rounded-2xl shadow-md p-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <HiOutlineMail className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-sm text-gray-500">Email</div>
                      <a
                        href={`mailto:${userData.contact?.email}`}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        {userData.contact?.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <HiOutlinePhone className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-sm text-gray-500">Phone</div>
                      <a
                        href={`tel:${userData.contact?.phone}`}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        {userData.contact?.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaGlobe className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-sm text-gray-500">Website</div>
                      <a
                        href={userData.contact?.website}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        {userData.contact?.website}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaGithub className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-sm text-gray-500">Github</div>
                      <a
                        href={userData.contact?.github}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        {userData.contact?.website}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaLinkedin className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-sm text-gray-500">LinkedIn</div>
                      <a
                        href={userData.contact?.linkedin}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        {userData.contact?.linkedin}
                      </a>
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

export default Me;
