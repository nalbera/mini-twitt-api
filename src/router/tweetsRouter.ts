import express from 'express';
import authMiddleware from '../middlewares/authMiddleware';

import { newTweetController, getTweetsController, getTweetByIdController, deleteTweetCotroller } from '../controllers/tweets';
import voteTweetsController from '../controllers/tweets/voteTweetsController';

const router = express.Router();

router.post('/tweet', authMiddleware, newTweetController);
router.get('/tweets', getTweetsController);
router.get('/tweet/:id', getTweetByIdController);
router.delete('/tweet/:id', authMiddleware, deleteTweetCotroller);
router.post('/tweet/:id/votes', authMiddleware, voteTweetsController);

export default router;