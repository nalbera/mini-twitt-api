import express from 'express';
import { loginUserController, newUserController, getUserController, getUserLogguedController } from '../controllers/users';
import authMiddleware from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/user/register', newUserController);
router.post('/user/login',loginUserController);

router.get('/user/:id', getUserController);
router.get('/user', authMiddleware, getUserLogguedController);//retora los datos del usuario logueado
router.get('/user/:id/tweets', (_req,res) => res.send('Tweets de usuario'));//retorna los tweets del usuario

export default router;