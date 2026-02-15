import { Router } from "express"
import { checkLoggedIn, googleAuth, loginUser, logout } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middelware.js";


const authRouter = Router();

authRouter.post('/login', loginUser);
authRouter.get('/logout', authMiddleware, logout);
authRouter.get('/me', authMiddleware, checkLoggedIn);
authRouter.post('/google', googleAuth)

export default authRouter;