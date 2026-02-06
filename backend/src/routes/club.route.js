import { Router } from "express";
import { addRequestForJoin, changeClubCoverImage, changeClubLogo, createClub, getAllClubs, getClubById, getRequestForJoin } from "../controllers/club.controller.js";
import { authMiddleware } from "../middleware/auth.middelware.js";

const clubRouter = Router();

clubRouter.get('/get-all', getAllClubs)
clubRouter.post('/create-club', authMiddleware, createClub);
clubRouter.get('/:clubId', getClubById);
clubRouter.put('/join-request', authMiddleware, addRequestForJoin);
clubRouter.patch('/change-cover', authMiddleware, changeClubCoverImage);
clubRouter.patch('/change-logo', authMiddleware, changeClubLogo);
clubRouter.post('/member-requests', authMiddleware, getRequestForJoin);

export default clubRouter;
