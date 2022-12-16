export const isDevelopment = import.meta.env.DEV;
export const DEV_API_URL = import.meta.env.VITE_APP_DEV_API_URL;
export const PROD_API_URL = import.meta.env.VITE_APP_PROD_API_URL;
export const API_URL = isDevelopment ? DEV_API_URL : PROD_API_URL;