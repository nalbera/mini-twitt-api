import { TweetsPhotos } from "../../models";

const deletePhotoByTweetService = async (id: number): Promise<void | undefined> => {
    
    await TweetsPhotos.destroy({
        where:{
            tweet_id: id
        }
    });

    return;
}

export default deletePhotoByTweetService;