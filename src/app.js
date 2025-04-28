import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

// Initialize app
const app = express();

// Config
dotenv.config({ path: './.env' });

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(cookieParser());

// Test route - ADD THIS
app.get('/api/v1/test', (req, res) => {
    res.status(200).json({ status: "Working!" });
});

// Routes
import userRouter from './routes/user.routes.js';
app.use("/api/v1/users", userRouter);

export default app;