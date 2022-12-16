const env = process.env;
const {
  NODE_ENV,
} = env;

export const isDevelopment = NODE_ENV === 'development';