import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import connection from "../config/configDb";
import User from "./users.model";

class Tweets extends Model<InferAttributes<Tweets>, InferCreationAttributes<Tweets>>{
    declare id: CreationOptional<number>;
    declare text?: string;
    declare user_id?: ForeignKey<User['id']>;
};

Tweets.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        text: {
            type: DataTypes.STRING(300),
            allowNull: false,
        },
    },
    {
        createdAt: true,
        updatedAt: false,
        tableName: 'tweets',
        sequelize: connection
    }
);

export default Tweets;