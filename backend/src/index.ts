import { PORT, IS_DEVELOPMENT } from './config/env';

import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());
app.disable('x-powered-by');

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Welcome to Node API\'s by 007',
  });
});

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at ${IS_DEVELOPMENT ? 'http://localhost:' : ''}${PORT}`);
});