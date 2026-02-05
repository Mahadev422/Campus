import { Link, Outlet, useParams } from "react-router-dom";

import PersonCard from "../../components/event/PersonCard";
import EventInfo from "../../components/event/EventInfo";
import EventBasicInfo from "../../components/event/EventBasicInfo";
import { useGetEventById } from "../../store/useEvent";
import { useEffect } from "react";
import Error from '../../components/loaders/Error';

// Main Event Detail Page
const Event = () => {
  const { getEventById, loading, event, error } = useGetEventById();
  // Sample event data
  const {eventId} = useParams();

  useEffect(() => {
    getEventById(eventId);
  },[eventId]);

  if(loading) return <p>Loading...</p>
  
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section with Cover Image */}
      {error && <Error error={error} />}
      <div className="relative">
        <div className="h-96 overflow-hidden">
          <img
            src={event.coverImage || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop'}
            alt="Event Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Event Basic Info Overlay */}
        <EventBasicInfo />
      </div>

      {/* Main Content */}
      <div className="px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:w-2/3">
            {/* Navigation Tabs */}
            <div className="bg-white rounded shadow-lg mb-8 overflow-hidden">
              <div className="flex justify-around overflow-x-auto no-scroll">
                {[
                  { name: "Overview", link: "" },
                  { name: "Participants", link: "participants" },
                  { name: "Gallery", link: "gallery" },
                ].map((tab, i) => (
                  <Link
                    key={i}
                    to={tab.link}
                    className={`px-6 py-4 font-semibold whitespace-nowrap transition-colors 
                      text-gray-600 hover:text-black hover:bg-blue-200
                    `}
                  >
                    {tab.name}
                  </Link>
                ))}
              </div>
            </div>
            <Outlet />
          </div>

          {/* Right Column - Sidebar */}
          <EventInfo />
        </div>
      </div>
    </div>
  );
};

export default Event;
