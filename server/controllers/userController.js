import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js';

const register = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body

    const dupeUser = await User.findOne({
        $or: [
            {username},
            {email}
        ]
    })

    if (dupeUser) {
        if (dupeUser.username === username) {
            res.status(400)
            throw new Error("Username already taken")
        }
        if (dupeUser.email === email) {
            res.status(400)
            throw new Error("Email already in use")
        }
    }

    if(username.length <= 3 || username.length >= 30) {
        res.status(400)
        throw new Error("Username must be between 4-30 characters long.")
    }
    if(password.length <= 5) {
        res.status(400)
        throw new Error("Password must be atleast 6 characters long.")}

    const user = await User.create({
        username,
        email,
        password
    })

    if(user) {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('invalid user data')
    }
})

const login = asyncHandler(async (req, res) => {
    const {username, password} = req.body

    const user = await User.findOne({username})

    if(user && await user.matchPassword(password)) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email
        })
    } else {
        res.status(401)
        throw new Error('User not found')
    }
})

const logout = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })

    res.status(201).json({ message: 'User logged out' });
});

const getUser = asyncHandler(async (req, res) => {
    const user = {
        _id: req.user._id,
        name: req.user.username,
        email: req.user.email
    }

    res.status(200).json(user);
})

const getUsers = asyncHandler(async (req, res) => {
    const thisUserId = req.user._id;
    if(thisUserId) {
        const otherUsers = await User.find({_id: {$ne: thisUserId}}).select("-password")
        res.status(200).json(otherUsers)
    } else {
        res.status(500)
        throw new Error('Internal server error')
    }

})

export default {register, login, logout, getUser, getUsers}