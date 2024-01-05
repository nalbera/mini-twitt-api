import { Request, Response } from "express";
import { HttpResponse } from "../../errors/http.response";
import { getTweetByIdService, voteExistsTweetService, insertVoteTweetsService, getAverageVotesService } from "../../database/services/tweetServices";

const response = new HttpResponse();

const voteTweetsController = async (req: Request, res: Response) => {
    try {
        const { id }= req.params;
        const userId = req.body.userInfo.id;
        const { vote } = req.body;

        if(!vote || vote < 1 || vote > 5) return response.Conflict(res, 'Invalid vote');

        const tweet = await getTweetByIdService(Number(id));

        if(tweet?.user_id == userId) return response.Conflict(res, "You can't vote for your own tweet");

        const voteExists = await voteExistsTweetService(Number(id), Number(userId));

        if(voteExists) return response.Conflict(res, "You can't vote for the same tewwt twice.");

        await insertVoteTweetsService(Number(vote), Number(userId), Number(id));

        const media = await getAverageVotesService(Number(id));

        response.Ok(res, media);


    } catch (error) {
        console.log(error);
        
        response.Error(res, error);
    }
}

export default voteTweetsController;