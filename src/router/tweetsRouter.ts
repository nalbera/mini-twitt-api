import express from 'express';
import authMiddleware from '../middlewares/authMiddleware';

import { newTweetController } from '../controllers/tweets';

const router = express.Router();

router.post('/tweet', authMiddleware, newTweetController);//nuevo tweet
router.get('/tweets', (_req,res) => res.send('LISTADO DE TWEETS'));//lista todos los tweets
router.get('/tweet/:id');//lista un tweet específico
router.delete('/tweet/:id');//elimina un tweet

export default router;