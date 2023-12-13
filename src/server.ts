import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './router';
import handleError from './errors/handleError';
import notFound from './errors/notFound';
import fileUpload from 'express-fileupload';


const server = express();


server.use(cors());
server.use(express.json());
server.use(morgan('dev'));
server.use(express.urlencoded({extended: false}))
server.use(fileUpload());
server.use('/uploads',express.static('./uploads'));

server.use(router);

server.use(notFound);
server.use(handleError);

export default server;