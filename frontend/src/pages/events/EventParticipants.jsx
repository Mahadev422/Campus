import React, { useEffect } from "react";
import { useGetEventById, useGetParticipants } from "../../store/useEvent";
import Error from "../../components/loaders/Error";

const EventParticipants = () => {
  const { event, loading } = useGetEventById();
  const { getParticipants, participants, participantsLoader, error } = useGetParticipants();

  useEffect(() => {
    if (!loading || event.participants.length !== 0) getParticipants(event._id);
  }, [event]);

  if (loading || participantsLoader) return <p>Loading...</p>;
  return (
    <div>
      {error && <Error error={error} />}
      <div>
        {participants.length === 0 ? (
          <div className="flex items-center justify-center p-8 text-gray-500">
            <p className="text-lg font-medium">No Participants</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {participants.map((participant, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-4 mb-2 flex items-center space-x-4 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <img
                  src={participant.profilePic}
                  alt={participant.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
                />
                <h1 className="text-lg font-semibold text-gray-800">
                  {participant.name}
                </h1>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventParticipants;
