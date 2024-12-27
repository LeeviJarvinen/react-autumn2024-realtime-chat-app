import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
    let token

    token = req.cookies.jwt

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            const user = await User.findById(decoded.userId).select('-password')

            if(!user) {
                res.status(404)
                throw new Error('User not found')
            }
            
            req.user = user

            next()
        } catch (error) {
            res.status(401)
            throw new Error('Unauthorized, invalid token')
        }
    } else {
        res.status(410);
        throw new Error('Unauthorized, no token')
    }
})

export { protect }