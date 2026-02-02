import { Router } from "express";
import { createEvent, getEventById, getEvents, getEventsByClubId } from "../controllers/event.controller.js";
import { authMiddleware } from "../middleware/auth.middelware.js";


const eventRouter = Router();

eventRouter.post('/create-event', authMiddleware, createEvent);
eventRouter.get('/get-events', getEvents);
eventRouter.get('/get-club-events/:clubId', getEventsByClubId);
eventRouter.get('/get-event/:eventId', getEventById)
export default eventRouter;