import { Tweets, TweetsPhotos } from "../../models";

const getAllTweetsService = async (): Promise<Tweets[] | undefined> => {

    const allTweets = await Tweets.findAll({
        include: TweetsPhotos
    });

    if (allTweets) return allTweets;

    return undefined;
}

export default getAllTweetsService;