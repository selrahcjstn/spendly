import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import authRouter from './src/routes/authRoutes.js';
import expensesRoute from './src/routes/expensesRoutes.js';

import cookieParser from "cookie-parser";

dotenv.config();  

const app = express();
const PORT = process.env.PORT || 5000;  

await connectDB();

//middleware
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/auth", authRouter);

//expenses
app.use("/api/expenses", expensesRoute);

app.listen(PORT, () => {
    console.log(`The server is running on PORT ${PORT}`);
});
