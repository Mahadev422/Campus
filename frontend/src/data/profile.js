import { FaAward, FaCertificate, FaHeart, FaTrophy } from "react-icons/fa";

export const userData = {
  // Basic Information
  id: 1,
  name: "Alex Johnson",
  username: "@alexjohnson",
  title: "Computer Science Student",
  bio: "Passionate about AI, web development, and open-source projects. Always looking to learn and contribute to the tech community.",
  profilePic:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  coverImage:
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
  clubsJoined: [
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
  eventsParticipated: [
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
      description: "Networking with companies and exploring job opportunities",
      date: "Aug 25, 2023",
      location: "Main Campus Ground",
      status: "completed",
      certificate: false,
      rating: 4,
    },
  ],



  // Achievements
  achievements: [
    {
      id: 1,
      title: "Tech Star 2023",
      description: "Awarded for outstanding contribution to tech clubs",
      icon: FaTrophy,
      date: "Dec 2023",
    },
    {
      id: 2,
      title: "Event Organizer",
      description: "Successfully organized 3 major campus events",
      icon: FaCertificate,
      date: "Nov 2023",
    },
    {
      id: 3,
      title: "Leadership",
      description: "Club president for AI & ML Club",
      icon: FaAward,
      date: "Oct 2023",
    },
    {
      id: 4,
      title: "Volunteer 100+ Hours",
      description: "Completed 120+ hours of campus volunteering",
      icon: FaHeart,
      date: "Sep 2023",
    },
  ],

};
