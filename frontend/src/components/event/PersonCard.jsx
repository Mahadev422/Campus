const PersonCard = ({ person }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4">
          <img
            src={person.avatar}
            alt={person.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
          />
          {person.isChiefGuest && (
            <div className="absolute -top-2 -right-2 bg-linear-to-r from-yellow-400 to-orange-500 text-white p-2 rounded-full">
              <FaCrown className="w-4 h-4" />
            </div>
          )}
        </div>
        <h4 className="font-bold text-gray-900 text-lg">{person.name}</h4>
        <p className="text-blue-600 font-semibold mb-2">{person.role}</p>
        {person.title && (
          <p className="text-gray-600 text-sm mb-3">{person.title}</p>
        )}
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{person.bio}</p>
        <div className="flex space-x-2">
          {person.twitter && (
            <a
              href={person.twitter}
              className="p-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500"
            >
              <FaTwitter className="w-4 h-4" />
            </a>
          )}
          {person.linkedin && (
            <a
              href={person.linkedin}
              className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonCard;