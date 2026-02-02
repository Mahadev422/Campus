import { Router } from "express";
import { createClub, getAllClubs, getClubById } from "../controllers/club.controller.js";
import { authMiddleware } from "../middleware/auth.middelware.js";

const clubRouter = Router();

clubRouter.get('/get-all', getAllClubs)
clubRouter.post('/create-club', authMiddleware, createClub);
clubRouter.get('/:clubId', getClubById)
export default clubRouter;
