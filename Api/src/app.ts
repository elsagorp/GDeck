import { config } from 'dotenv/types';
import express from 'express';
import Config from './config';
import morgan from 'morgan';
import cors from 'cors';

import taskRoutes from './routes/tasks.routes';
import boardsRoutes from './routes/boards.routes';
import decksRoutes from './routes/decks.routes';

const app = express();

app.set('port', Config.PORT);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(taskRoutes);
app.use(boardsRoutes);
app.use(decksRoutes);

export default app;
