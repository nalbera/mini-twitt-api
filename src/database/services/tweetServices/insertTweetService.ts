import { Tweets } from "../../models";

const insertTweetService = async (userId: number, text: string): Promise<Tweets | undefined> => {

    const tweet = await Tweets.create({user_id: userId, text});

    if(tweet) return tweet;

    return;
}

export default insertTweetService;