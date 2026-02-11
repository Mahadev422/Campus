import { Router } from "express";
import { changeMyProfile, createUser, getMyDetails, getUserById } from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/auth.middelware.js";
import { uploadPost } from "../controllers/post.controller.js";

const userRouter = Router();

userRouter.get('/get-user/:id', getUserById);
userRouter.get('/my-details', authMiddleware, getMyDetails);
userRouter.patch('/change', authMiddleware, changeMyProfile);
userRouter.post('/post', authMiddleware, uploadPost);
userRouter.post('/create-user', createUser);

export default userRouter;