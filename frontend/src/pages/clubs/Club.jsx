import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import BasicInfo from "../../components/club/BasicInfo";
import ClubDetails from "../../components/club/ClubDetails";
import { useClub, useClubById } from "../../store/useClub";
import { useEffect } from "react";
import CirclesLoader from "../../components/loaders/CirclesLoader";

const Club = () => {
  const { clubId } = useParams();
  const location = useLocation();

  const {getClubById, loading, error, clubData} = useClubById();
  // const clubData = {...club}
  useEffect(() => {
    getClubById(clubId);
  },[clubId]);
  
  
  if(loading) return <CirclesLoader />
  if(error) return <p>{error}</p>
  if (Object.keys(clubData).length == 0) return <CirclesLoader />;
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section with Cover Image */}
      <div className="relative">
        <div className="h-64 md:h-80 overflow-hidden">
          <img
            src={clubData.coverImage}
            alt="Club Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
        </div>

        {/* Club Basic Info */}
        <BasicInfo clubData={clubData} />
      </div>

      {/* Main Content */}
      <div className="px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:w-2/3">
            {/* Navigation Tabs */}
            <div className="bg-white rounded shadow-lg mb-8 overflow-hidden">
              <div className="flex justify-around overflow-x-auto">
                {[
                  { name: "About", link: "" },
                  { name: "Members", link: "members" },
                  { name: "Events", link: "events" },
                  { name: "Gallery", link: "gallery" },
                  { name: "Requests", link: "requests" },
                ].map((tab, i) => (
                  <Link
                    key={i}
                    to={tab.link}
                    className={`px-4 py-3 font-semibold whitespace-nowrap transition-colors
                      hover:bg-blue-100`}
                  >
                    {tab.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <Outlet />
          </div>

          {/* Right Column - Sidebar */}
          <ClubDetails />
        </div>
      </div>
    </div>
  );
};

export default Club;
