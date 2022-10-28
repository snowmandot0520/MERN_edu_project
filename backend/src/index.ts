import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

import express, { Application, Request, Response } from 'express';

declare var process : {
  env: {
    NODE_ENV: 'development' | 'production';
    PORT?: number;
    PWD: string;
  }
}

dotenv.config();
console.log("process:", process.env)

const app: Application = express();
const port = process.env.PORT! || 8080;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});