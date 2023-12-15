import { Request, Response } from "express";
import { HttpResponse } from "../../errors/http.response";
import { getTweetByIdService, deleteTweetByIdService, getPhotosByTweetService, deletePhotoByTweetService } from "../../database/services/tweetServices";
import deletePhotoUtil from "../../utils/deletePhotoUtil";


const response = new HttpResponse();

const deleteTweetCotroller = async (req: Request, res: Response) => {
    try {
        
        const { id } = req.params;

        const user_Id = req.body.userInfo.id;

        const tweet = await getTweetByIdService(Number(id));

        const photos = await getPhotosByTweetService(Number(id));

        //res.send(photos)
        //res.send(tweet)
        if(user_Id !== tweet?.user_id) return response.Unauthorized(res, 'You are not authorized to perform this action');

        if(photos?.length){
            for(let photo of photos){
                await deletePhotoUtil(photo.name);
                await deletePhotoByTweetService(Number(id));
            }
        }

        await deleteTweetByIdService(Number(id));
        
        response.Ok(res, 'The tweet has been deleted')
    } catch (error) {
        response.Error(res, error);
    }
}

export default deleteTweetCotroller;