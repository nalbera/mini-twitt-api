import express from 'express';
import { loginUserController, newUserController, getUserController, getUserLogguedController, getUserTweetsController } from '../controllers/users';
import authMiddleware from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/user/register', newUserController);
router.post('/user/login',loginUserController);

router.get('/user/:id', getUserController);
router.get('/user', authMiddleware, getUserLogguedController);
router.get('/user/:id/tweets', authMiddleware, getUserTweetsController);//retorna los tweets del usuario

export default router;