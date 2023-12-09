import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import connection from "../config/configDb";
import Tweets from "./tweets.model";

class TweetsPhotos extends Model<InferAttributes<TweetsPhotos>, InferCreationAttributes<TweetsPhotos>>{
    declare id: CreationOptional<number>;
    declare name: string;
    declare tweet_id: ForeignKey<Tweets['id']>
};

TweetsPhotos.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        createdAt: true,
        updatedAt: false,
        tableName: 'tweets_photos',
        sequelize: connection
    }
);

export default TweetsPhotos;