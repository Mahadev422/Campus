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
  try {
    res.clearCookie("rft").json({ ok: true, message: "Logout Successfully." });
  } catch (err) {
    res.status(500).json({ ok: false, msg: err.message });
  }
};

export const checkLoggedIn = async (req, res) => {
  const userId = req.userId;
  if (!userId)
    return res.status(400).json({ ok: false, msg: "Please login first." });
  try {
    const user = await User.findById(userId).select("_id name");

    if (!user)
      return res.status(404).json({ ok: false, msg: "User not found" });
    return res.status(200).json({ ok: true, msg: user });
  } catch (err) {
    res.status(400).json({ ok: false, msg: err.message });
  }
};

import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleAuth = async (req, res) => {
  const { credential } = req.body;

  if (!credential) {
    return res
      .status(400)
      .json({ ok: false, msg: "Credential token required" });
  }
  try {
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    const { sub: googleId, email, name, picture, email_verified } = payload;

    if (!email_verified) {
      return res.status(400).json({ ok: false, msg: "Email not verified" });
    }

    let user = await User.findOne({ "contact.email": email });

    if (!user) {
      const userName = email.split("@")[0];
      const password = `${userName}#iSM`;
      user = await User.create({
        googleId,
        name,
        userName,
        password,
        contact: { email },
        academic: { degree: "Outsider", department: "Not in college" },
        profilePic: picture,
      });
    }
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
  } catch (error) {
    console.error("🔥 Google Auth Error:", error.message);
    return res.status(500).json({
      ok: false,
      msg: "Google authentication failed",
    });
  }
};
