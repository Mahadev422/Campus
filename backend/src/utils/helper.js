export const formatUserData = (user) => {
  const userData = {
    id: user._id,
    name: user.name,
    academic: user.academic,
    contact: user.contact,
    clubsJoined: user.clubsJoined.length,
    eventsParticipated: user.eventsParticipated.length,
    isActive: user.isActive,
    profilePic: user.profilePic,
    bio: user.bio,
  };
  return userData;
};

export const stringToArray = (str) => {
  return str
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
};
