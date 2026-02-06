import { Link, Outlet, useParams } from "react-router-dom";

import PersonCard from "../../components/event/PersonCard";
import EventInfo from "../../components/event/EventInfo";
import EventBasicInfo from "../../components/event/EventBasicInfo";
import { useGetEventById } from "../../store/useEvent";
import { useEffect, useState } from "react";
import Error from '../../components/loaders/Error';
import { FaCamera } from "react-icons/fa";
import ImageUpload from "../../components/home/ImageUpload";
import { useAuth } from "../../store/useAuth";

// Main Event Detail Page
const Event = () => {
  const { getEventById, loading, event, changeCoverImage } = useGetEventById();
  const {eventId} = useParams();
  const {user} = useAuth();
  const [upload, setUpload] = useState(false);

  useEffect(() => {
    getEventById(eventId);
  },[eventId]);

  if(loading) return <p>Loading...</p>
  
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section with Cover Image */}
      {upload && <ImageUpload set={setUpload} onUpload={changeCoverImage} />}
      <div className="relative">
        <div className="h-96 overflow-hidden relative">
          {(user && user?._id === event?.createdBy.userId) && <button onClick={() => setUpload(true)} className="absolute cursor-pointer top-3 z-20 bg-blue-500 p-3 text-white rounded-full right-3"><FaCamera className="h-5 w-5" /></button>}
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
