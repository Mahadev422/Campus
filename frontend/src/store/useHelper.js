import {
  FaBook,
  FaCalendarAlt,
  FaCalendarCheck,
  FaCalendarDay,
  FaCalendarTimes,
  FaCamera,
  FaCertificate,
  FaCode,
  FaFilm,
  FaFlask,
  FaFutbol,
  FaGamepad,
  FaMusic,
  FaPaintBrush,
  FaTree,
  FaUserFriends,
  FaUsers,
  FaVideo,
} from "react-icons/fa";
import { create } from "zustand";

export const useHelper = create((set, get) => ({
  eventTypes: [
    "conference",
    "workshop",
    "concert",
    "sports",
    "networking",
    "art",
    "hackathon",
    "seminar",
    "webinar",
    "gaming",
    "podcast",
  ],
  clubType: [
    "technology",
    "sports",
    "arts",
    "photography",
    "literature",
    "gaming",
    "film",
    "science",
    "development",
    "others",
  ],
  statusOptions: [
    {
      value: "all",
      label: "All Events",
      icon: FaCalendarAlt,
    },
    {
      value: "upcoming",
      label: "Upcoming",
      icon: FaCalendarDay,
    },
    {
      value: "ongoing",
      label: "Current",
      icon: FaCalendarCheck,
    },
    {
      value: "past",
      label: "Past",
      icon: FaCalendarTimes,
    },
  ],
  getEventTypeIcon: (type) => {
    const icons = {
      Workshop: FaFlask,
      Conference: FaUsers,
      Hackathon: FaCode,
      Seminar: FaCertificate,
      Concert: FaMusic,
      Sports: FaFutbol,
      Art: FaPaintBrush,
      Gaming: FaGamepad,
      Networking: FaUserFriends,
      Webinar: FaVideo,
    };
    const icon = icons[type] || FaCalendarAlt;
    return icon;
  },
  getCategoryIcon: (category) => {
    const icons = {
      technology: FaCode,
      sports: FaFutbol,
      arts: FaPaintBrush,
      science: FaFlask,
      music: FaMusic,
      photography: FaCamera,
      literature: FaBook,
      gaming: FaGamepad,
      film: FaFilm,
      environment: FaTree,
    };
    const icon = icons[category] || FaUsers;
    return icon;
  },
  formatDate: (iso) => {
    if (!iso) return null;
    const date = new Date(iso);

    const formatted = date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    return formatted;
  },

  firstCapital: (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  addFourYears: (iso) => {
    const date = new Date(iso);
    date.setFullYear(date.getFullYear() + 4);
    const formatted = date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    return formatted;
  },

  isBeforeToday: (isoDate) => {
    if (!isoDate) return false;

    const input = new Date(isoDate);
    if (isNaN(input)) return false;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    input.setHours(0, 0, 0, 0);

    return input < today ? "Completed" : "Upcoming";
  },
}));

export const addFourYears = (iso) => {
  const date = new Date(iso);
  date.setFullYear(date.getFullYear() + 4);
  const formatted = date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return formatted;
};
