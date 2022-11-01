import * as dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 8080;
export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';