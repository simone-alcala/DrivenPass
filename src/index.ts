import express, { json } from 'express';
import 'express-async-errors';
import cors from 'cors';
import dotenv from 'dotenv';

import router from './routers/index.js';
import errorHandler from './middleware/errorHandlerMiddleware.js';
 
dotenv.config();

const app = express();
app.use(json());
app.use(cors());
app.use(router);
app.use(errorHandler);

const PORT = +process.env.PORT || 4000;
  
app.listen(PORT,() => console.log(`Running on ${PORT}`));