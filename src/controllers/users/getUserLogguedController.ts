import { Request, Response } from "express";
import { HttpResponse } from "../../errors/http.response";
import { getUserByIdService } from "../../database/services/userServices";

const response = new HttpResponse();

const getUserLogguedController = async (req: Request, res: Response) => {
    try {
        const { id } = req.body.userInfo;
        
        const userLogged = await getUserByIdService(Number(id));

        if(!userLogged) return response.Forbidden(res);

        response.Ok(res,userLogged);
        
    } catch (error) {
        response.Error(res, error);
    }
}

export default getUserLogguedController;