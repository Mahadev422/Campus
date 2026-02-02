import React from "react";
import {
  FaCalendarAlt,
  FaCheck,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaRegCalendar,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { HiOutlineGlobe, HiOutlineMail } from "react-icons/hi";
import { useClubById } from "../../store/useClub";
import { useHelper } from "../../store/useHelper";

const ClubDetails = () => {
  const { clubData } = useClubById();
  const { formatDate } = useHelper();
  
  return (
    <div className="lg:w-1/3 space-y-6">
      {/* Club Details Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Club Details</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <FaCalendarAlt className="w-5 h-5 text-blue-600" />
            <div>
              <div className="text-sm text-gray-500">Founded</div>
              <div className="font-medium">
                {formatDate(clubData.createdAt)}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="w-5 h-5 text-blue-600" />
            <div>
              <div className="text-sm text-gray-500">Meeting Location</div>
              <div className="font-medium">{clubData.location}</div>
            </div>
          </div>
          {clubData.details.website !== "" && (
            <div className="flex items-center space-x-3">
              <HiOutlineGlobe className="w-5 h-5 text-blue-600" />
              <div>
                <div className="text-sm text-gray-500">Website</div>
                <a
                  href={clubData.details.website}
                  className="font-medium text-blue-600 hover:underline"
                >
                  {clubData.details.website}
                </a>
              </div>
            </div>
          )}
          <div className="flex items-center space-x-3">
            <HiOutlineMail className="w-5 h-5 text-blue-600" />
            <div>
              <div className="text-sm text-gray-500">Email</div>
              <a
                href={`mailto:${clubData.details.email}`}
                className="font-medium text-blue-600 hover:underline"
              >
                {clubData.details.email}
              </a>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <br />
        {/* Social Media */}
        <div className="rounded-2xl px-4">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Connect With Us
          </h3>
          <div className="flex space-x-4">
            <a
              href={clubData.details.twitter}
              className="p-3 bg-blue-400 text-white rounded-xl hover:shadow-lg"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href={clubData.details.instagram}
              className="p-3 bg-orange-500 text-white rounded-xl hover:shadow-lg"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href={clubData.details.linkedin}
              className="p-3 bg-blue-700 text-white rounded-xl hover:shadow-lg"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href={clubData.details.youtube}
              className="p-3 bg-red-600 text-white rounded-xl hover:shadow-lg"
            >
              <FaYoutube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Join Requirements */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Requirements to Join
        </h3>
        <ul className="space-y-3">
          {clubData.requirements.map((req, index) => (
            <li key={index} className="flex items-start space-x-3">
              <FaCheck className="w-5 h-5 text-green-500 mt-0.5" />
              <span className="text-gray-700">{req}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClubDetails;
