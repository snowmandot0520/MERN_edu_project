import * as dotenv from 'dotenv';

dotenv.config()

import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app: Application = express();

const port = process.env.PORT || 8080;
const isDevelopment = process.env.NODE_ENV === 'development';

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

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at ${isDevelopment ? 'http://localhost:' : ''}${port}`);
});