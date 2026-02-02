import { Router } from "express"
import { checkLoggedIn, loginUser, logout } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middelware.js";


const authRouter = Router();

authRouter.post('/login', loginUser);
authRouter.get('/logout', authMiddleware, logout);
authRouter.get('/me', authMiddleware, checkLoggedIn)

export default authRouter;