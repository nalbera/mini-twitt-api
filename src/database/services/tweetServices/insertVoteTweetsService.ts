import { TweetsVotes } from "../../models";

const insertVoteTweetsService = async (vote: number, userId: number, tweetId: number): Promise<TweetsVotes | undefined> => {
    
    const tweetVote = await TweetsVotes.create({
        value: vote,
        user_id: userId,
        tweet_id: tweetId
    });

    if(!tweetVote) return undefined;

    return tweetVote;
}

export default insertVoteTweetsService;