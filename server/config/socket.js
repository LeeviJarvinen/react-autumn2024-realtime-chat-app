import { Server as SocketIoServer} from 'socket.io'
import express from 'express'
import http from 'http'
import cors from 'cors';

const app = express()


const server = http.createServer(app)

const io = new SocketIoServer(server, {
    cors:{
        origin: ["http://localhost:3000"],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    },
});

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

const userSocketMap = {};

io.on('connection', (socket) => {
    console.log('a user connected', socket.id)

    const userId = socket.handshake.query.userId;
    if(userId != 'undefined') userSocketMap[userId] = socket.id;

    io.emit('getOnlineUsers',Object.keys(userSocketMap));

    socket.on('disconnect', () => {
        console.log('a user disconnected', socket.id);
        delete userSocketMap[userId];
        io.emit('getOnlineUsers',Object.keys(userSocketMap));

    })
});

export { app, io, server}