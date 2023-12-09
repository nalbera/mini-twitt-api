import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const server = express();


server.use(cors());
server.use(express.json());
server.use(morgan('dev'));
server.use(express.urlencoded({extended: false}))

import connection from './database/config/configDb';
const testConnection = async () => {
    try {
        await connection.authenticate();
        console.log('Me conecte');
    } catch (error) {
        console.log(error);
        
    }
}

testConnection();
export default server;