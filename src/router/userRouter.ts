import express from 'express';
import { loginUserController, newUserController } from '../controllers/users';

const router = express.Router();

router.post('/user/register', newUserController);
router.post('/user/login',loginUserController);

router.get('user/:id', (_req,res) => res.send('Usuario by id'));//perfil público de usuario
router.get('/user/:id/tweets', (_req,res) => res.send('Tweets de usuario'));//retorna los tweets del usuario
router.get('/user', (_req,res) => res.send('Usuario LOGUEADO'));//retora los datos del usuario logueado

export default router;