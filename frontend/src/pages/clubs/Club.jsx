import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import BasicInfo from "../../components/club/BasicInfo";
import ClubDetails from "../../components/club/ClubDetails";
import { useClubById } from "../../store/useClub";
import { useEffect } from "react";
import CirclesLoader from "../../components/loaders/CirclesLoader";
import { FaCamera } from "react-icons/fa";
import { useState } from "react";
import ImageUpload from '../../components/home/ImageUpload';
import { useAuth } from "../../store/useAuth";
import RefreshPage from '../../components/home/RefreshPage';


const Club = () => {
  const { clubId } = useParams();
  const location = useLocation();

  const {user} = useAuth();
  const [upload, setUpload] = useState(false);

  const { getClubById, loading, clubData, changeClubCoverImage } = useClubById();

  const admin = user && clubData?.coordinator?.some((member) => member.userId === user._id);
  useEffect(() => {
    getClubById(clubId);
  }, [clubId]);

  if (loading) return <CirclesLoader />;

  if (Object.keys(clubData).length === 0) return <RefreshPage />;
  
  return (
    <div className="bg-linear-to-b min-h-screen from-gray-50 to-white">
      {/* Hero Section with Cover Image */}
      {upload && <ImageUpload set={setUpload} onUpload={changeClubCoverImage} />}
      <div className="relative h-120">
        {/* Image Wrapper */}
        <div className="h-full relative">
          {admin && <button onClick={() => setUpload(true)} className="absolute z-10 right-3 top-3 bg-blue-500 p-3 text-white rounded-full"><FaCamera className="h-5 w-5" /></button>}
          <img
            src={clubData.coverImage}
            alt="Club Cover"
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
        </div>

        {/* Club Basic Info */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <BasicInfo clubData={clubData} admin={admin} />
        </div>
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
