import User from "../models/user.model.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/jwtToken.js";

export const loginUser = async (req, res) => {
  if (!req.body)
    return res
      .status(400)
      .json({ ok: false, msg: "User-name and password is required." });
  const { userName, password } = req.body;

  if (!userName || !password)
    return res
      .status(400)
      .json({ ok: false, msg: "User-name and password is required." });

  try {
    const user = await User.findOne({
      userName: userName.toLowerCase(),
    }).select("_id name password");

    if (!user || user.password !== password)
      return res.status(404).json({ ok: false, msg: "Invalid credentials." });

    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    res
      .cookie("act", accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 15 * 60 * 1000,
      })
      .cookie("rft", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .json({ ok: true, msg: { _id: user._id, name: user.name } });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ ok: false, msg: err.message });
  }
};

export const logout = (req, res) => {
  res
    .clearCookie("rft")
    .json({ message: "Logged out" });
};

export const checkLoggedIn = async (req, res) => {
  const userId = req.userId;
  if (!userId)
    return res.status(400).json({ ok: false, msg: "Please login first." });
  try {
    const user = await User.findById(userId).select('_id name');

    if (!user)
      return res.status(404).json({ ok: false, msg: "User not found" });
    return res.status(200).json({ ok: true, msg: user });
  } catch (err) {
    res.status(400).json({ ok: false, msg: err.message });
  }
};
