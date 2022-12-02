import * as dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 8080;
export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
export const DB_USERNAME = process.env.DB_USERNAME;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_NAME = process.env.DB_NAME;
export const CLUSTER_URL = process.env.CLUSTER_URL;
export const EMAIL_HOST = process.env.EMAIL_HOST;
export const EMAIL_PORT = process.env.EMAIL_PORT;
export const EMAIL_USERNAME = process.env.EMAIL_USERNAME;
export const EMAIL_API_KEY = process.env.EMAIL_API_KEY;