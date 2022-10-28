import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
declare var process : {
  env: {
    NODE_ENV: 'development' | 'production';
    PORT?: number;
    PWD: string;
  }
}
dotenv.config();
console.log("process:", process)

const app: Application = express();
const port = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});