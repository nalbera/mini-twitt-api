import { Op } from "sequelize";
import { TweetsVotes } from "../../models";

const voteExistsTweetService = async (id: number, userId: number): Promise<TweetsVotes | undefined> => {
    
    const voteExists = await TweetsVotes.findOne({
        attributes: ['id'],
        where: {
            [Op.and]:[
                
                {user_id: userId},
                {tweet_id: id}
            ]
        }
    });

    if(!voteExists) return undefined;

    return voteExists;
}

export default voteExistsTweetService;