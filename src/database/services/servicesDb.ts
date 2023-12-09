import { User, Tweets, TweetsPhotos, TweetsVotes } from "../models";
import connection from '../config/configDb';

export const testConnection = async () => {
    try {
        await connection.authenticate();
        console.log(`Connected to database ${connection.getDatabaseName()}`);
    } catch (error) {
        console.log(error);
        
    }
}

export const syncDB = async () => {
    associationsModels();
    await User.sync({alter: true});
    await Tweets.sync({alter: true});
    await TweetsPhotos.sync({alter: true});
    await TweetsVotes.sync({alter: true});
};

const associationsModels = () => {
    User.hasMany(Tweets, {foreignKey: 'user_id'});
    Tweets.belongsTo(User, {foreignKey: 'user_id'});

    User.hasMany(TweetsVotes, {foreignKey: 'user_id'});
    TweetsVotes.belongsTo(User, {foreignKey: 'user_id'});

    Tweets.hasMany(TweetsVotes, {foreignKey: 'tweet_id'});
    TweetsVotes.belongsTo(Tweets, {foreignKey: 'tweet_id'});

    Tweets.hasMany(TweetsPhotos, {foreignKey: 'tweet_id'});
    TweetsPhotos.belongsTo(Tweets, {foreignKey: 'tweet_id'});
}