import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import connection from "../config/configDb";
import User from "./users.model";
import Tweets from "./tweets.model";

class TweetsVotes extends Model<InferAttributes<TweetsVotes>, InferCreationAttributes<TweetsVotes>>{
    declare id: CreationOptional<number>;
    declare value: number;
    declare user_id: ForeignKey<User['id']>;
    declare tweet_id: ForeignKey<Tweets['id']>
};

TweetsVotes.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        value: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        createdAt: true,
        updatedAt: false,
        tableName: 'tweets_votes',
        sequelize: connection
    }
);

export default TweetsVotes;