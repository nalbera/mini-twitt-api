import { TweetsPhotos } from "../../models"

const insertTweetPhotoService = async (id: number, imageName: string): Promise<TweetsPhotos | undefined> => {

    const tweetPhoto = await TweetsPhotos.create({ name: imageName, tweet_id: id });

    if(tweetPhoto) return tweetPhoto;

    return undefined;
}

export default insertTweetPhotoService;