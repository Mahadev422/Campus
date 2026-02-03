import { Router } from "express";
import { addParticipant, cancelParticipant, createEvent, getEventById, getEvents, getEventsByClubId, getParticipants } from "../controllers/event.controller.js";
import { authMiddleware } from "../middleware/auth.middelware.js";


const eventRouter = Router();

eventRouter.post('/create-event', authMiddleware, createEvent);
eventRouter.get('/get-events', getEvents);
eventRouter.get('/get-club-events/:clubId', getEventsByClubId);
eventRouter.get('/get-event/:eventId', getEventById);

eventRouter.patch('/add-participant', authMiddleware, addParticipant);
eventRouter.delete('/cancel-participant', authMiddleware, cancelParticipant);

eventRouter.post('/get-participants', authMiddleware, getParticipants);

export default eventRouter;