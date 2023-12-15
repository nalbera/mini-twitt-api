import express from 'express';
import authMiddleware from '../middlewares/authMiddleware';

import { newTweetController, getTweetsController, getTweetByIdController, deleteTweetCotroller } from '../controllers/tweets';

const router = express.Router();

router.post('/tweet', authMiddleware, newTweetController);
router.get('/tweets', getTweetsController);
router.get('/tweet/:id', getTweetByIdController);
router.delete('/tweet/:id', authMiddleware, deleteTweetCotroller);

export default router;