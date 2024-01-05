import { Request, Response } from "express";
import { getTweetsByUserService } from "../../database/services/userServices";
import { HttpResponse } from "../../errors/http.response";

const response = new HttpResponse();

const getUserTweetsController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const userTweets = await getTweetsByUserService(parseInt(id));

        if(!userTweets?.length) return response.NotFound(res, 'No tweets to show');

        response.Ok(res, userTweets);

    } catch (error) {
        response.Error(res,error);
    }
}

export default getUserTweetsController;