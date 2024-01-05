import { Tweets, User, TweetsPhotos, TweetsVotes } from "../../models";

const getTweetsByUserService = async (id: number): Promise<Tweets[] | undefined> => {
    
    const userTweets = await Tweets.findAll({
            where: {
                user_id: id
            },
            include: [
                {model: User, attributes: ['email']},
                {model: TweetsPhotos},
                {model: TweetsVotes, attributes: ['value']}
            ],
            order:[
                ['id','ASC']
            ],
    })
    
    if(userTweets) return userTweets

    return undefined;
}

export default getTweetsByUserService;