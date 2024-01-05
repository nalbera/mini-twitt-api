import { col, fn } from "sequelize";
import { TweetsVotes } from "../../models";

const getAverageVotesService = (id: number): Promise<TweetsVotes[] | undefined> => {
    const media = TweetsVotes.findAll({
        attributes: [[fn('AVG',col('value')),'avgVote']],
        where:{
            tweet_id: id
        }
    });
    
    return media;
}

export default getAverageVotesService;