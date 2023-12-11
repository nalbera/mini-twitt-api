import { Request, Response } from "express";
import { HttpResponse } from "../../errors/http.response";
import { insertUserService } from "../../database/services/userServices";

const response = new HttpResponse();

const newUserController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        
        if(!email || !password) return response.MissingData(res);

        const user = await insertUserService(email,password);

        if(user){
            response.Ok(res, user);
        }else{
            response.Conflict(res);
        }
    } catch (error) {
        console.log(error);
        response.Error(res,error);
    }
}

export default newUserController;