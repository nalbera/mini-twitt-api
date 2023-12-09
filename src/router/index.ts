import express from 'express';
import userRouter from './userRouter';
import tweetsRouter from './tweetsRouter';

const router = express.Router();

router.use(userRouter);
router.use(tweetsRouter);

export default router;