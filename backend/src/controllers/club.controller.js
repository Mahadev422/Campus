import Club from "../models/club.model.js";
import User from "../models/user.model.js";

export const getAllClubs = async (req, res) => {
  try {
    const data = await Club.aggregate([
      {
        $project: {
          _id: 1,
          clubName: 1,
          tagline: 1,
          category: 1,
          recent: 1,
          rating: 1,
          approved: 1,
          membersCount: {$add: [{ $size: "$members" }, {$size: "$coordinator"}]},
        },
      },
    ]);

    res.status(200).json({ ok: true, msg: data });
  } catch (err) {
    res.status(500).json({ ok: false, msg: err.message });
  }
};

export const createClub = async (req, res) => {
  const body = req.body;
  const userId = req.userId;
  try {
    const user = await User.findById(userId).select("_id name");
    const data = {
      ...body,
      coordinator: [{ userId: user._id, name: user.name, role: "coordinator" }],
      members: []
    };

    const newClub = await Club.create({ ...data });
    await User.findByIdAndUpdate(userId, {
      $addToSet: {clubsJoined: newClub._id}
    }, {new: true});
    return res.status(201).json({ ok: true, msg: newClub });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ ok: false, msg: err.message });
  }
};

export const getClubById = async (req, res) => {
  const { clubId } = req.params;
  try {
    const club = await Club.findById(clubId);
    if(!club) return res.status(404).json({ok: false, msg: 'Club Not found'});
    res.status(200).json({ ok: true, msg: club });
  } catch (err) {
    res.status(500).json({ ok: false, msg: err.message });
  }
};
