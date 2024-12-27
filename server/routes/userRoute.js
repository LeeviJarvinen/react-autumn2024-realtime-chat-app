import express from 'express';
import userController from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/profile', protect, userController.getUser);
router.get('/users', protect, userController.getUsers);

// router.post('/create', userController.createUser)
// router.put('/chat/:id', protect, userController.placeUserInChat)

export default router;