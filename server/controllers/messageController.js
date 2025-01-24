import asyncHandler from 'express-async-handler'
import {io} from '../config/socket.js'
import Message from '../models/messageModel.js'
import Conversation from '../models/conversationModel.js';
import { getReceiverSocketId } from '../config/socket.js';

const sendMsg = asyncHandler(async(req, res) => {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    if (!message || message.trim() === '') {
        res.status(400);
        throw new Error('Message cannot be empty');
    }
    try {
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })

        if(!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }
    
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })
    
        if(newMessage) {
            conversation.messages.push(newMessage._id)
    
        }else{
            res.status(400)
            throw new Error("oops something went wrong")
        }
    
        await Promise.all([conversation.save(), newMessage.save()])

        const receiverSocketId = getReceiverSocketId(receiverId)
        if(receiverSocketId) {
            io.to(receiverSocketId).emit('newMessage', newMessage)
        }

        res.status(201).json(newMessage);
    } catch (err) {
        res.status(500)
        throw new Error('Server error')
    }
})

const getMsg = asyncHandler(async (req, res) => {
    try {
        const {id:userToChatId} = req.params
        const senderId = req.user._id
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId]}
        }).populate('messages')

        if(!conversation) return res.status(200).json([])

        res.status(200).json(conversation.messages)

    } catch (error) {
        res.status(500)
        throw new Error('Server error')
    }
})

export default {sendMsg, getMsg}