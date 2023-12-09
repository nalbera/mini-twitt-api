import express from 'express';

const router = express.Router();

router.post('/tweet');//nuevo tweet
router.get('/tweets', (_req,res) => res.send('LISTADO DE TWEETS'));//lista todos los tweets
router.get('/tweet/:id');//lista un tweet específico
router.delete('/tweet/:id');//elimina un tweet

export default router;