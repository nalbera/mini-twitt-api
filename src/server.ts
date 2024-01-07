import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './router';
import handleError from './errors/handleError';
import notFound from './errors/notFound';
import fileUpload from 'express-fileupload';
import path from 'path';

const server = express();


server.use(cors());
server.use(express.json());
server.use(morgan('dev'));
server.use(express.urlencoded({extended: false}))
server.use(fileUpload());

const staticDir = path.join(process.cwd(), './src/uploads');
server.use('/uploads', express.static(staticDir));

server.use(router);

server.use(notFound);
server.use(handleError);

export default server;