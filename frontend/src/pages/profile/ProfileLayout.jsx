import React, { useState } from "react";
import {
  FaEdit,
  FaCog,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaHeart,
  FaTrophy,
  FaCertificate,
  FaAward,
  FaShareAlt,
  FaCamera,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaRegCalendarCheck,
  FaUserFriends,
  FaCalendarCheck,
  FaMedal,
  FaChartLine,
  FaUserPlus,
  FaFileAlt,
} from "react-icons/fa";
import {
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineUserGroup,
  HiOutlineAcademicCap,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineGlobe,
} from "react-icons/hi";

import JoinedClubCard from "../../components/profile/JoinedClubCard";
import ParticipatedEventCard from "../../components/profile/ParticipatedEventCard";
import AchievementBadge from "../../components/profile/AchievementBadge";
import StatsCard from "../../components/profile/StatsCard";
import { Link } from "react-router-dom";

// Main Profile Page Component
const ProfileLayout = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    // Basic Information
    id: 1,
    name: "Alex Johnson",
    username: "@alexjohnson",
    title: "Computer Science Student",
    bio: "Passionate about AI, web development, and open-source projects. Always looking to learn and contribute to the tech community.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    coverPhoto:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1200&h=400&fit=crop",

    // Contact Information
    contact: {
      email: "alex.johnson@university.edu",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      website: "https://alexjohnson.dev",
      social: {
        twitter: "https://twitter.com/alexjohnson",
        linkedin: "https://linkedin.com/in/alexjohnson",
        github: "https://github.com/alexjohnson",
        instagram: "https://instagram.com/alexjohnson",
      },
    },

    // Academic Information
    academic: {
      university: "Stanford University",
      degree: "B.S. Computer Science",
      year: "Senior",
      gpa: "3.8/4.0",
      graduation: "May 2024",
      department: "School of Engineering",
    },

    // Stats
    stats: {
      joinedClubs: 5,
      eventsAttended: 24,
      eventsOrganized: 3,
      hoursVolunteered: 120,
      achievements: 12,
      connections: 156,
    },

    // Joined Clubs
    joinedClubs: [
      {
        id: 1,
        name: "Tech Innovators Society",
        category: "Technology",
        categoryColor: "bg-blue-100",
        logo: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=100&h=100&fit=crop",
        membershipType: "Active Member",
        membershipColor: "bg-green-100 text-green-800",
        joinedDate: "Jan 2023",
        role: "Web Developer",
        eventsAttended: 8,
        isAdmin: false,
      },
      {
        id: 2,
        name: "AI & Machine Learning Club",
        category: "Technology",
        categoryColor: "bg-purple-100",
        logo: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=100&h=100&fit=crop",
        membershipType: "Core Member",
        membershipColor: "bg-blue-100 text-blue-800",
        joinedDate: "Feb 2023",
        role: "Project Lead",
        eventsAttended: 12,
        isAdmin: true,
      },
      {
        id: 3,
        name: "Web Development Club",
        category: "Technology",
        categoryColor: "bg-indigo-100",
        logo: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=100&h=100&fit=crop",
        membershipType: "Active Member",
        membershipColor: "bg-green-100 text-green-800",
        joinedDate: "Mar 2023",
        role: "Frontend Developer",
        eventsAttended: 6,
        isAdmin: false,
      },
      {
        id: 4,
        name: "Entrepreneurship Cell",
        category: "Business",
        categoryColor: "bg-yellow-100",
        logo: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=100&h=100&fit=crop",
        membershipType: "Member",
        membershipColor: "bg-gray-100 text-gray-800",
        joinedDate: "Apr 2023",
        role: "Member",
        eventsAttended: 4,
        isAdmin: false,
      },
      {
        id: 5,
        name: "Music Society",
        category: "Arts",
        categoryColor: "bg-pink-100",
        logo: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=100&h=100&fit=crop",
        membershipType: "Active Member",
        membershipColor: "bg-green-100 text-green-800",
        joinedDate: "May 2023",
        role: "Guitarist",
        eventsAttended: 10,
        isAdmin: false,
      },
    ],

    // Participated Events
    participatedEvents: [
      {
        id: 1,
        title: "Annual Tech Summit 2023",
        description:
          "Attended keynote sessions and workshops on AI and emerging technologies",
        date: "Dec 15, 2023",
        time: "9:00 AM - 6:00 PM",
        location: "University Convention Center",
        status: "completed",
        certificate: true,
        rating: 5,
      },
      {
        id: 2,
        title: "AI & ML Workshop",
        description:
          "Hands-on workshop on machine learning algorithms and implementation",
        date: "Nov 20, 2023",
        time: "2:00 PM - 5:00 PM",
        location: "Computer Lab 302",
        status: "completed",
        certificate: true,
        rating: 4,
      },
      {
        id: 3,
        title: "Startup Pitch Competition",
        description:
          "Participated as a contestant in the annual startup pitch event",
        date: "Oct 10, 2023",
        time: "10:00 AM - 4:00 PM",
        location: "Business School Auditorium",
        status: "completed",
        certificate: true,
        rating: 5,
      },
      {
        id: 4,
        title: "Web Dev Hackathon",
        description: "24-hour hackathon focusing on web development projects",
        date: "Sep 5-6, 2023",
        location: "Tech Hub Building",
        status: "completed",
        certificate: false,
        rating: 4,
      },
      {
        id: 5,
        title: "Career Fair 2023",
        description:
          "Networking with companies and exploring job opportunities",
        date: "Aug 25, 2023",
        location: "Main Campus Ground",
        status: "completed",
        certificate: false,
        rating: 4,
      },
    ],

    // Upcoming Events
    upcomingEvents: [
      {
        id: 6,
        title: "Tech Conference 2024",
        description:
          "Upcoming technology conference featuring industry leaders",
        date: "Jan 20, 2024",
        time: "9:00 AM - 5:00 PM",
        location: "Convention Center",
        status: "registered",
      },
      {
        id: 7,
        title: "Data Science Workshop",
        description: "Advanced workshop on data analysis and visualization",
        date: "Feb 15, 2024",
        time: "1:00 PM - 4:00 PM",
        location: "Data Lab",
        status: "registered",
      },
    ],

    // Achievements
    achievements: [
      {
        id: 1,
        title: "Tech Star 2023",
        description: "Awarded for outstanding contribution to tech clubs",
        icon: <FaTrophy className="w-8 h-8 text-white" />,
        date: "Dec 2023",
      },
      {
        id: 2,
        title: "Event Organizer",
        description: "Successfully organized 3 major campus events",
        icon: <FaCertificate className="w-8 h-8 text-white" />,
        date: "Nov 2023",
      },
      {
        id: 3,
        title: "Leadership",
        description: "Club president for AI & ML Club",
        icon: <FaAward className="w-8 h-8 text-white" />,
        date: "Oct 2023",
      },
      {
        id: 4,
        title: "Volunteer 100+ Hours",
        description: "Completed 120+ hours of campus volunteering",
        icon: <FaHeart className="w-8 h-8 text-white" />,
        date: "Sep 2023",
      },
    ],

    // Skills
    skills: [
      { name: "JavaScript", level: "Expert" },
      { name: "React", level: "Advanced" },
      { name: "Python", level: "Advanced" },
      { name: "AI/ML", level: "Intermediate" },
      { name: "UI/UX Design", level: "Intermediate" },
      { name: "Project Management", level: "Intermediate" },
    ],

    // Interests
    interests: [
      "Artificial Intelligence",
      "Web Development",
      "Open Source",
      "Startups",
      "Music",
      "Photography",
      "Travel",
      "Reading",
    ],
  });

  const tabs = [
    { link: "", label: "Overview", icon: HiOutlineUser },
    { link: "clubs", label: "Clubs", icon: HiOutlineUserGroup },
    { link: "events", label: "Events", icon: HiOutlineCalendar },
    { link: "achievements", label: "Achievements", icon: FaTrophy },
    { link: "settings", label: "Settings", icon: FaCog },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Profile Cover Section */}
      <div className="relative">
        {/* Cover Photo */}
        <div className="h-64 md:h-80 overflow-hidden">
          <img
            src={userData.coverPhoto}
            alt="Profile Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
        </div>

        {/* Profile Info Overlay */}
        <div className="container mx-auto px-6 relative -mt-24">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              {/* Profile Picture and Basic Info */}
              <div className="flex items-start space-x-6">
                <div className="relative -mt-32 md:-mt-36">
                  <img
                    src={userData.avatar}
                    alt={userData.name}
                    className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover border-8 border-white shadow-2xl"
                  />
                  <button className="absolute -bottom-3 -right-3 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-lg">
                    <FaCamera className="w-5 h-5" />
                  </button>
                </div>

                <div className="pt-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                      {userData.name}
                    </h1>
                    <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full font-semibold">
                      {userData.academic.year}
                    </span>
                  </div>
                  <p className="text-xl text-gray-600 mb-4">{userData.title}</p>
                  <p className="text-gray-700 mb-6 max-w-2xl">{userData.bio}</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="flex items-center space-x-2 text-gray-600">
                      <HiOutlineLocationMarker className="w-5 h-5" />
                      <span>{userData.contact.location}</span>
                    </span>
                    <span className="flex items-center space-x-2 text-gray-600">
                      <HiOutlineAcademicCap className="w-5 h-5" />
                      <span>{userData.academic.university}</span>
                    </span>
                    <span className="flex items-center space-x-2 text-gray-600">
                      <FaGraduationCap className="w-5 h-5" />
                      <span>Class of {userData.academic.graduation}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-3">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center justify-center space-x-2 px-6 py-3 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                >
                  <FaEdit className="w-5 h-5" />
                  <span>{isEditing ? "Cancel" : "Edit Profile"}</span>
                </button>
                <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-shadow">
                  <FaShareAlt className="w-5 h-5" />
                  <span>Share Profile</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Stats & Info */}
          <div className="lg:w-1/4 space-y-6">
            {/* Stats Card */}
            <StatsCard userData={userData} />

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
                        href={`mailto:${userData.contact.email}`}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        {userData.contact.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <HiOutlinePhone className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-sm text-gray-500">Phone</div>
                      <a
                        href={`tel:${userData.contact.phone}`}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        {userData.contact.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <HiOutlineGlobe className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-sm text-gray-500">Website</div>
                      <a
                        href={userData.contact.website}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        {userData.contact.website}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Social Links
                </h3>
                <div className="flex space-x-3">
                  {Object.entries(userData.contact.social).map(
                    ([platform, url]) => {
                      const Icon = {
                        twitter: FaTwitter,
                        linkedin: FaLinkedin,
                        github: FaGithub,
                        instagram: FaInstagram,
                      }[platform];

                      return (
                        <a
                          key={platform}
                          href={url}
                          className="p-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-blue-100 hover:text-blue-600 transition-colors"
                        >
                          <Icon className="w-6 h-6" />
                        </a>
                      );
                    },
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:w-3/4">
            {/* Navigation Tabs */}
            <div className="bg-white rounded-md shadow-md mb-8 overflow-hidden">
              <div className="flex justify-around overflow-x-auto">
                {tabs.map((tab, i) => {
                  const Icon = tab.icon;
                  return (
                    <Link
                      key={i}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-6 py-4 font-semibold whitespace-nowrap transition-colors ${
                        activeTab === tab.id
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{tab.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* Academic Information */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Academic Information
                    </h2>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold">
                      <FaEdit className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <div className="text-sm text-gray-500">University</div>
                        <div className="font-bold text-gray-900 text-lg">
                          {userData.academic.university}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Degree</div>
                        <div className="font-bold text-gray-900">
                          {userData.academic.degree}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Department</div>
                        <div className="font-bold text-gray-900">
                          {userData.academic.department}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <div className="text-sm text-gray-500">Year</div>
                        <div className="font-bold text-gray-900">
                          {userData.academic.year}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">GPA</div>
                        <div className="font-bold text-gray-900">
                          {userData.academic.gpa}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">
                          Expected Graduation
                        </div>
                        <div className="font-bold text-gray-900">
                          {userData.academic.graduation}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills & Interests */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Skills */}
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Skills
                    </h2>
                    <div className="space-y-4">
                      {userData.skills.map((skill, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center"
                        >
                          <span className="font-medium text-gray-900">
                            {skill.name}
                          </span>
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              skill.level === "Expert"
                                ? "bg-green-100 text-green-800"
                                : skill.level === "Advanced"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interests */}
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Interests
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {userData.interests.map((interest, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors cursor-pointer"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "clubs" && (
              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        Joined Clubs
                      </h2>
                      <p className="text-gray-600">
                        Clubs you're currently active in
                      </p>
                    </div>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                      <FaUserPlus className="w-5 h-5" />
                      <span>Join New Club</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {userData.joinedClubs.map((club) => (
                      <JoinedClubCard key={club.id} club={club} />
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Club Leadership
                    </h3>
                    <div className="bg-linear-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-gray-900">
                            AI & Machine Learning Club
                          </div>
                          <div className="text-gray-600">Club President</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">
                            Since Feb 2023
                          </div>
                          <div className="font-semibold text-blue-600">
                            Manage Club →
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "events" && (
              <div className="space-y-8">
                {/* Participated Events */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        Events History
                      </h2>
                      <p className="text-gray-600">
                        Events you've participated in
                      </p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold">
                      View All ({userData.participatedEvents.length})
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    {userData.participatedEvents.map((event) => (
                      <ParticipatedEventCard key={event.id} event={event} />
                    ))}
                  </div>
                </div>

                {/* Upcoming Events */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Upcoming Events
                  </h2>

                  {userData.upcomingEvents.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {userData.upcomingEvents.map((event) => (
                        <div
                          key={event.id}
                          className="bg-blue-50 rounded-xl p-6"
                        >
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h4 className="font-bold text-gray-900">
                                {event.title}
                              </h4>
                              <div className="flex items-center space-x-2 mt-1">
                                <span className="text-sm text-gray-600">
                                  {event.date}
                                </span>
                                <span className="text-sm text-gray-600">•</span>
                                <span className="text-sm text-gray-600">
                                  {event.time}
                                </span>
                              </div>
                            </div>
                            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                              Registered
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mb-4">
                            {event.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1 text-gray-500">
                              <FaMapMarkerAlt className="w-4 h-4" />
                              <span className="text-sm">{event.location}</span>
                            </div>
                            <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                              View Details
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <FaRegCalendarCheck className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">
                        No upcoming events
                      </h3>
                      <p className="text-gray-500 mb-4">
                        You haven't registered for any upcoming events yet.
                      </p>
                      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Browse Events
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === "achievements" && (
              <div className="space-y-8">
                {/* Achievements Grid */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        Achievements
                      </h2>
                      <p className="text-gray-600">
                        Your accomplishments and awards
                      </p>
                    </div>
                    <div className="text-3xl font-bold text-yellow-600">
                      {userData.stats.achievements}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {userData.achievements.map((achievement) => (
                      <AchievementBadge
                        key={achievement.id}
                        achievement={achievement}
                      />
                    ))}
                  </div>
                </div>

                {/* Certificates */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Certificates
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="bg-linear-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center"
                      >
                        <FaCertificate className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                        <h4 className="font-bold text-gray-900">
                          Tech Summit 2023
                        </h4>
                        <p className="text-gray-600 text-sm mt-1">
                          Participation Certificate
                        </p>
                        <button className="mt-4 px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
                          View Certificate
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activity Timeline */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Recent Activity
                  </h2>
                  <div className="space-y-6">
                    {[
                      {
                        action: "Joined AI & ML Club",
                        date: "2 days ago",
                        icon: <FaUserFriends className="w-5 h-5" />,
                      },
                      {
                        action: "Attended Web Dev Workshop",
                        date: "1 week ago",
                        icon: <FaCalendarCheck className="w-5 h-5" />,
                      },
                      {
                        action: "Earned Tech Star Award",
                        date: "2 weeks ago",
                        icon: <FaMedal className="w-5 h-5" />,
                      },
                      {
                        action: "Organized Hackathon",
                        date: "3 weeks ago",
                        icon: <FaChartLine className="w-5 h-5" />,
                      },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                          {activity.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">
                            {activity.action}
                          </div>
                          <div className="text-sm text-gray-500">
                            {activity.date}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Account Settings
                </h2>

                <div className="space-y-8">
                  {/* Privacy Settings */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Privacy Settings
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">
                            Profile Visibility
                          </div>
                          <div className="text-sm text-gray-500">
                            Who can see your profile
                          </div>
                        </div>
                        <select className="px-4 py-2 border border-gray-300 rounded-lg">
                          <option>Public</option>
                          <option>Friends Only</option>
                          <option>Private</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">
                            Activity Visibility
                          </div>
                          <div className="text-sm text-gray-500">
                            Show your activity to others
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            defaultChecked
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Notification Settings */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Notification Settings
                    </h3>
                    <div className="space-y-3">
                      {[
                        "Event Reminders",
                        "Club Updates",
                        "New Messages",
                        "Achievement Alerts",
                      ].map((setting) => (
                        <div
                          key={setting}
                          className="flex items-center justify-between"
                        >
                          <span className="text-gray-900">{setting}</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              defaultChecked
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Account Actions */}
                  <div className="pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Account Actions
                    </h3>
                    <div className="space-y-3">
                      <button className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                        Change Password
                      </button>
                      <button className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                        Download My Data
                      </button>
                      <button className="w-full text-left px-4 py-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
