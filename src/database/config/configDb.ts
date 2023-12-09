import { Sequelize } from "sequelize";
import config from "../../default";


const connection = new Sequelize(
    config.DB.NAME,
    config.DB.USER,
    config.DB.PASS,
    {
        host: config.DB.HOST,
        dialect: config.DB.DIALECT,
    }

)

export default connection;