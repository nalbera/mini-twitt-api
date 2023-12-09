import { NextFunction, Request, Response } from "express";
import { HttpResponse } from "./http.response";

const response = new HttpResponse();

const handleError = (error: any, req: Request, res: Response, next: NextFunction) => {
    if(error){
        response.Error(res, error);
    }
    next();
}

export default handleError;