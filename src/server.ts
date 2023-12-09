import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const server = express();


server.use(cors());
server.use(express.json());
server.use(morgan('dev'));
server.use(express.urlencoded({extended: false}))


export default server;