import { FaPlus } from "react-icons/fa";
import ClubEventCard from "../../components/club/ClubEventCard";
import { useClubById } from "../../store/useClub";
import { useEffect, useState } from "react";
import CreateEventForm from "../events/CreateEventForm";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useAuth } from "../../store/useAuth";
import { useParams } from "react-router-dom";

const ClubEvent = () => {
  const { clubEvents, clubEventsLoading, getCLubEvents, clubData } =
    useClubById();
  const { user } = useAuth();
  const [create, setCreate] = useState(true);
  const admin =
    user && clubData.coordinator.some((member) => member.userId === user._id);

  const { clubId } = useParams();

  useEffect(() => {
    getCLubEvents(clubId);
  }, [clubId]);

  return (
    <div>
      <div className="flex gap-4 justify-between mb-2">
        <h1 className="font-bold text-3xl py-1 px-2">Events</h1>
        {admin &&
          (create ? (
            <button
              onClick={() => setCreate(false)}
              disabled={!admin}
              className="py-1 px-2 font-semibold font-serif flex items-center gap-2 rounded-md hover:rounded-full bg-green-400"
            >
              <FaPlus />
              Create Event
            </button>
          ) : (
            <button
              onClick={() => setCreate(true)}
              disabled={!admin}
              className="py-1 px-2 font-semibold font-serif flex items-center gap-2 rounded-md hover:rounded-full bg-green-400"
            >
              <IoCloseCircleOutline />
              See Event
            </button>
          ))}
      </div>
      {create ? (
        clubEventsLoading ? (
          <p>Loading...</p>
        ) : clubEvents.length === 0 ? (
          <p>No event created by this club</p>
        ) : (
          clubEvents.map((event) => (<ClubEventCard key={event._id} event={event} />
          ))
        )
      ) : (
        <CreateEventForm />
      )}
    </div>
  );
};

export default ClubEvent;
