import { register, login, updateUserInfo} from "../controller/authController.js";
import express from 'express';

const authRouter = express.Router();

//routes
authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.patch("/edit/:id", updateUserInfo);

export default authRouter; 