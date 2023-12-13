import { Tweets, TweetsPhotos } from "../../models";

const getTweetByIdService = async (id: number): Promise<Tweets | undefined> => {

    const tweet = await Tweets.findByPk(id, {
        include: TweetsPhotos
    });

    if(tweet) return tweet;

    return undefined;
}

export default getTweetByIdService;