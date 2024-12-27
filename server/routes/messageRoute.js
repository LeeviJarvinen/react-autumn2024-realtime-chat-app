import express from 'express';
import messageController from '../controllers/messageController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/:id', protect, messageController.getMsg);
router.post('/send/:id', protect, messageController.sendMsg);

export default router;