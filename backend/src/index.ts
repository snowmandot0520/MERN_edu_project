import { PORT, IS_DEVELOPMENT } from './config/env';

import express, { Application, Request, Response } from 'express';
import bodyParser from'body-parser';
import multer from 'multer';
import cors from 'cors';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express'

import swaggerDocument from './swagger.json'

// custom modules
import allRoutes from './routes';

const app: Application = express();

// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().array())
app.use(helmet());  
app.use(cors());
app.disable('x-powered-by');

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Welcome to Node API\'s by 007',
  });
});


app.use(allRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at ${IS_DEVELOPMENT ? 'http://localhost:' : ''}${PORT}`);
});