import jwt from 'jsonwebtoken';
import { HttpResponse } from '../errors/http.response';
import { NextFunction, Request, Response } from 'express';
import config from '../default';

const response = new HttpResponse();

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { authorization } = req.headers;

        if(!authorization) return response.MissingData(res, 'Authorization header is missing');

        let tokenInfo;

        try {
            tokenInfo = jwt.verify(authorization, config.JWT.SECRET);
        } catch (error) {
            response.Error(res, error);    
        }

        req.body.userInfo = tokenInfo;

        next();

    } catch (error) {
        response.Error(res, error);
    }
}