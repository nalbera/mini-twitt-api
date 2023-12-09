import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import connection from "../config/configDb";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>>{
    declare id: CreationOptional<number>;
    declare email: string;
    declare password: string;
    declare username: string;
    declare avatar: string;
    declare active: boolean;
};

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
        },
        avatar: {
            type: DataTypes.STRING
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    },
    {
        timestamps: true,
        tableName: 'users',
        sequelize: connection
    }
);

export default User;