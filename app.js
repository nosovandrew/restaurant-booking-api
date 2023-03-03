// main server code

import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import dbConnect from './db/dbConnect.js';
import HelloRoute from './routes/hello.js';
import TableRoute from './routes/table.js'

// setup mongodb connection
dbConnect()
    .then(() => console.log('Successfully connected to local MongoDB'))
    .catch((err) => console.log(err));

// setup express
const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

// define routes
app.use('/hello', HelloRoute);
app.use('/table', TableRoute);

export default app;
