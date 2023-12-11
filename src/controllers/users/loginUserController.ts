import {Request , Response} from 'express';
import { HttpResponse } from '../../errors/http.response';
import { loginUserService } from '../../database/services/userServices';
import jwt from 'jsonwebtoken';
import config from '../../default';

const response = new HttpResponse();

const loginUserController = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;

        if(!email || !password) return response.MissingData(res);

        const userLoggued = await loginUserService(email, password);

        if(!userLoggued) return response.Unauthorized(res);

        const jwtInfo = {
            id: userLoggued.id,
            active: userLoggued.active,
        };

        const token = jwt.sign(jwtInfo, config.JWT.SECRET, {expiresIn: '3d'});

        response.Ok(res, {token});

    } catch (error) {
        response.Error(res, error);
    }
}

export default loginUserController;