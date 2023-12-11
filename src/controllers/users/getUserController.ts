import { Request, Response } from "express";
import { HttpResponse } from "../../errors/http.response";
import { getUserByIdService } from "../../database/services/userServices";

const response = new HttpResponse();

const getUserController = async (req: Request, res: Response) => {
    try {

        const { id } = req.params;

        const user = await getUserByIdService(Number(id));

        if(!user) return response.NotFound(res);

        response.Ok(res, user);

    } catch (error) {
        response.Error(res, error);
    }
}

export default getUserController;