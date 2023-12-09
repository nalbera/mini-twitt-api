import { Dialect } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const config = {
    DB: {
      NAME: process.env.DATABASE_NAME ?? '',
      USER: process.env.DATABASE_USER ?? '',
      PASS: process.env.DATABASE_PASS ?? '',
      HOST: process.env.DATABASE_HOST ?? '',
      PORT: process.env.DATABASE_PORT ?? '',
      DIALECT: process.env.DATABASE_DIALECT as Dialect ?? 'postgres'
    }
  }
  export default config;