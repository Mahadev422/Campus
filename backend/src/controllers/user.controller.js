import User from "../models/user.model.js";
import { formatUserData } from "../utils/helper.js";

export const getUserById = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ ok: false, msg: "Id is required" });
  try {
    const user = await User.findById(id);
    if (!user)
      return res.status(404).json({ ok: false, msg: "User not found" });
    const userData = formatUserData(user);
    res.status(200).json({ ok: true, msg: userData });
  } catch (err) {
    res.status(400).json({ ok: false, msg: err.message });
  }
};

export const createUser = async (req, res) => {
  if (!req.body)
    return res.status(400).json({
      ok: false,
      msg: "Name, email, userName, degree and department are required.",
    });
  const { name, email, userName, degree, phone, department, password } =
    req.body;
  if (!name || !email || !userName || !degree || !department || !password)
    return res.status(400).json({
      ok: false,
      msg: "Name, email, userName, degree and department are required.",
    });

  try {
    const existingUser = await User.findOne({
      $or: [{ "contact.email": email.toLowerCase() }, { userName: userName }],
    }).select("name");
    if (existingUser)
      return res.json({
        ok: false,
        msg: `Username exist: ${existingUser.name}`,
      });
    const user = {
      name,
      userName,
      password,
      contact: { email, phone },
      academic: { degree, department },
    };
    const newUser = await User.create(user);
    res.status(201).json({ ok: true, msg: newUser });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ ok: false, msg: err.message });
  }
};

export const getMyDetails = async (req, res) => {
  const userId = req.userId;
  try {
    const user = await User.findById(userId)
      .populate("clubsJoined", "_id clubName category logo")
      .populate("eventsParticipated", "_id title venue to");
    if (!user)
      return res.status(404).json({ ok: false, msg: "User not found" });
    res.status(200).json({ ok: true, msg: user });
  } catch (err) {
    res.status(500).json({ ok: false, msg: err.message });
  }
};

export const changeMyProfile = async (req, res) => {
  const userId = req.userId;

  if (!req.body || !req.body.key || !req.body.value) {
    return res.status(400).json({ ok: false, msg: "Image is required" });
  }
  try {
    const { key, value } = req.body;
    const user = await User.findByIdAndUpdate(
      userId,
      { $set: { [key]: value } },
      { new: true },
    );
    if (!user) {
      return res.status(404).json({ ok: false, msg: "User not found" });
    }
    res.status(201).json({ ok: true, msg: user });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ ok: false, msg: err.message });
  }
};
