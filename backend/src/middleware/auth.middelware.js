import jwt from 'jsonwebtoken';
import { generateAccessToken } from '../utils/jwtToken.js';

export const authMiddleware = (req, res, next) => {
 const token = req.cookies.rft;

  if (!token) {
    return res.status(401).json({ ok: false, msg: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    req.userId = decoded.id;
    next();
  } catch {
    return res.status(401).json({ ok: false, msg: "Token expired" });
  }
};