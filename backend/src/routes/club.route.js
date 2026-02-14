import { Router } from "express";
import { addRequestForJoin, createClub, getAllClubs, getClubById, getRequestForJoin, handleRequest, updateClub } from "../controllers/club.controller.js";
import { authMiddleware } from "../middleware/auth.middelware.js";

const clubRouter = Router();

clubRouter.get('/get-all', getAllClubs)
clubRouter.post('/create-club', authMiddleware, createClub);
clubRouter.get('/:clubId', getClubById);
clubRouter.put('/join-request', authMiddleware, addRequestForJoin);
clubRouter.put('/handle-request', authMiddleware, handleRequest)
clubRouter.patch('/update', authMiddleware, updateClub);
clubRouter.post('/member-requests', authMiddleware, getRequestForJoin);

export default clubRouter;
