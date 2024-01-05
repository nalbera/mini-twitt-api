import { Tweets, TweetsPhotos, TweetsVotes, User } from "../../models";
import { fn, col } from "sequelize";
const getAllTweetsService = async (): Promise<Tweets[] | undefined> => {

    const allTweets = await Tweets.findAll({
        include: [
            {model: User, attributes: ['email']},
            {model: TweetsPhotos},
            {model: TweetsVotes, attributes: ['value']}
        ],
        order:[
            ['id','ASC']
        ],
    });

    if (allTweets) return allTweets;

    return undefined;
}

export default getAllTweetsService;