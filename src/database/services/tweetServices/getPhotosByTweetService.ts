import { TweetsPhotos } from "../../models";

const getPhotosByTweetService = async (id: number): Promise<TweetsPhotos[] | undefined> => {

    const photos = await TweetsPhotos.findAll({
        where: {
            tweet_id: id
        }
    });

    if(!photos.length) return undefined;

    return photos;
}

export default getPhotosByTweetService;