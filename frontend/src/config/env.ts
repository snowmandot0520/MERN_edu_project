const env = process.env;
const {
  NODE_ENV,
  REACT_APP_API_URL
} = env;

export const isDevelopment = NODE_ENV === 'development';
export const API_URL = REACT_APP_API_URL;