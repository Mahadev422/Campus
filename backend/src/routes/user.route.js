import { Router } from "express";
import { changeMyProfilePic, createUser, getMyDetails, getUserById } from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/auth.middelware.js";

const userRouter = Router();

userRouter.get('/get-user/:id', getUserById);
userRouter.get('/my-details', authMiddleware, getMyDetails);
userRouter.patch('/change-profile', authMiddleware, changeMyProfilePic)
userRouter.post('/create-user', createUser);

export default userRouter;