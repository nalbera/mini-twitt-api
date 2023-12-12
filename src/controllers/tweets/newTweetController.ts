import { Request, Response } from "express";
import { HttpResponse } from "../../errors/http.response";

import { insertTweetService } from "../../database/services/tweetServices";

const response = new HttpResponse();

const newTweetController = async (req: Request, res: Response) => {
    try {
        const { text } = req.body;
        
        const userId = req.body.userInfo.id;

        if(!text || text.length > 200) return response.Error(res,'The tweet text must exist and be less than 200 characters');

        const tweet = await insertTweetService(Number(userId), text);

        if(!tweet) return response.Error(res, 'Error inserting tweet');

        response.Ok(res, tweet);
        
    } catch (error) {
        response.Error(res, error);        
    }
}

export default newTweetController;