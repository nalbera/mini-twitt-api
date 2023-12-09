import { NextFunction, Request, Response } from "express";
import { HttpResponse } from "./http.response";

const response = new HttpResponse();

const notFound = (req: Request, res: Response, next: NextFunction) => {
    response.NotFound(res, 'No existe el recurso');
    next();
}

export default notFound;