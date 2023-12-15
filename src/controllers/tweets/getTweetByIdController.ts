import { Request, Response } from "express";
import { HttpResponse } from "../../errors/http.response";
import { getTweetByIdService } from "../../database/services/tweetServices";

const response = new HttpResponse();

const getTweetByIdController = async (req: Request, res: Response) => {
    try {
        
        const { id } = req.params;

        const tweet = await getTweetByIdService(Number(id));

        if(!tweet) return response.NotFound(res,'The requested tweet cannot be found');

        response.Ok(res, tweet);
        
    } catch (error) {
        response.Error(res, error);        
    }
}

export default getTweetByIdController;