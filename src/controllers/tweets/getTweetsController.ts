import { Request, Response } from "express";
import { HttpResponse } from "../../errors/http.response";
import { getAllTweetsService } from "../../database/services/tweetServices";

const response = new HttpResponse();

const getTweetsController = async (req: Request, res: Response) => {
    try {
        
        const tweets = await getAllTweetsService();

        if(!tweets?.length) return response.NotFound(res, 'No tweets to show');

        response.Ok(res, tweets);
        
    } catch (error) {
        response.Error(res, error);
    }
}

export default getTweetsController;