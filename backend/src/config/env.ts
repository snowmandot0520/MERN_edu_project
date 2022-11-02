import * as dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 8080;
export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
export const DB_USERNAME = process.env.DB_USERNAME;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_NAME = process.env.DB_NAME;
export const CLUSTER_URL = process.env.CLUSTER_URL;