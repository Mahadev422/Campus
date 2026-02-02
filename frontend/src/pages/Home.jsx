import {
  FaGraduationCap,
  FaCalendarAlt,
  FaUsers,
  FaBookOpen,
  FaArrowRight,
  FaStar,
  FaComments,
  FaHeart,
  FaRocket,
  FaLightbulb,
  FaAward,
  FaRegHandshake,
} from "react-icons/fa";
import { HiAcademicCap, HiUserGroup, HiBookOpen } from "react-icons/hi";
import Footer from '../components/home/Footer'
// Main Home Page Component
const Home = () => {
  const features = [
    {
      icon: <FaBookOpen className="w-8 h-8" />,
      title: "Learning Resources",
      description:
        "Access curated study materials, e-books, and research papers",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <FaCalendarAlt className="w-8 h-8" />,
      title: "Campus Events",
      description:
        "Stay updated with workshops, seminars, and social gatherings",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Student Clubs",
      description: "Join clubs based on your interests and hobbies",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <FaComments className="w-8 h-8" />,
      title: "Discussion Forums",
      description: "Connect with peers and discuss academic topics",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const stats = [
    {
      number: "10K+",
      label: "Active Students",
      icon: <FaUsers className="w-6 h-6" />,
    },
    {
      number: "500+",
      label: "Study Resources",
      icon: <FaBookOpen className="w-6 h-6" />,
    },
    {
      number: "100+",
      label: "Clubs & Societies",
      icon: <FaRegHandshake className="w-6 h-6" />,
    },
    {
      number: "50+",
      label: "Monthly Events",
      icon: <FaCalendarAlt className="w-6 h-6" />,
    },
  ];

  const upcomingEvents = [
    { title: "AI Workshop", date: "Tomorrow", club: "Tech Club" },
    { title: "Career Fair", date: "Nov 25", club: "Placement Cell" },
    { title: "Cultural Fest", date: "Dec 1", club: "Cultural Committee" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Computer Science Student",
      content:
        "UniConnect helped me find study groups and resources that improved my grades significantly!",
      icon: <FaStar className="w-5 h-5 text-yellow-500" />,
    },
    {
      name: "Michael Chen",
      role: "Club President",
      content:
        "Managing events and recruiting members has never been easier with this platform.",
      icon: <FaHeart className="w-5 h-5 text-red-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto p-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your Complete
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                {" "}
                Campus Hub
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Connect with peers, access resources, join clubs, and never miss
              an event. Everything you need for a successful campus life in one
              place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <FaArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                Explore Features
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative bg-linear-to-br from-blue-500 to-purple-600 rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-md p-4 shadow-lg"
                  >
                    <div
                      className={`p-3 rounded-lg ${feature.color} w-fit mb-3`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything You Need for Campus Life
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From academic resources to social connections, we've got you covered
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Smart Resource Library",
              description:
                "AI-powered recommendations for study materials tailored to your courses",
              icon: <HiAcademicCap className="w-10 h-10" />,
              color: "text-blue-600",
            },
            {
              title: "Event Management",
              description:
                "Create, manage, and promote events with built-in registration system",
              icon: <FaRocket className="w-10 h-10" />,
              color: "text-green-600",
            },
            {
              title: "Club Hub",
              description:
                "Discover and join student organizations with detailed information",
              icon: <HiUserGroup className="w-10 h-10" />,
              color: "text-purple-600",
            },
            {
              title: "Study Groups",
              description:
                "Form virtual study groups and collaborate on projects",
              icon: <HiBookOpen className="w-10 h-10" />,
              color: "text-orange-600",
            },
            {
              title: "Career Center",
              description:
                "Access internship opportunities and career guidance",
              icon: <FaAward className="w-10 h-10" />,
              color: "text-red-600",
            },
            {
              title: "Discussion Forums",
              description:
                "Engage in academic discussions and get help from peers",
              icon: <FaLightbulb className="w-10 h-10" />,
              color: "text-indigo-600",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div
                className={`p-3 rounded-xl bg-gray-50 w-fit mb-4 ${feature.color}`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          What Students Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-4">
                {testimonial.icon}
                <div className="ml-2">
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
