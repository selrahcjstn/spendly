import { register, login} from "../controller/authController.js";
import express from 'express';

const authRouter = express.Router();

//routes
authRouter.post('/register', register);
authRouter.post('/login', login);

export default authRouter; 