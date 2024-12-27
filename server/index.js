import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import connectDB from './config/dbConfig.js';

import { app, server } from './config/socket.js'

import userRoutes from './routes/userRoute.js'
import messageRoutes from './routes/messageRoute.js'
import errorMiddleware from './middleware/errorMiddleware.js';

const { notFound, errorHandler } = errorMiddleware;

dotenv.config({path: './config.env'})

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
  }));


connectDB();

app.use(cookieParser());

app.use('/api/users', userRoutes)
app.use('/api/messages', messageRoutes)

app.use(notFound);
app.use(errorHandler);

mongoose.connection.once('open', () => {
    console.log('connection succesful')
    server.listen(PORT, () => console.log(`server is running on port ${PORT}`));
})

export default app;