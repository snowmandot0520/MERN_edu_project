import { sign, verify } from 'jsonwebtoken';

import {
  TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRY,
  ACCESS_TOKEN_ALGO,
  REFRESH_TOKEN_EXPIRY,
  REFRESH_TOKEN_ALGO,
} from '../config/env';

if (
  !TOKEN_SECRET ||
  !ACCESS_TOKEN_EXPIRY ||
  !ACCESS_TOKEN_ALGO ||
  !REFRESH_TOKEN_EXPIRY ||
  !REFRESH_TOKEN_ALGO
) {
  console.log('Please set JWT ENV variables');
  process.exit(-1);
}

export const createAccessToken = (data) =>
  sign(data, process.env.TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    algorithm: process.env.ACCESS_TOKEN_ALGO,
  });

export const decryptAccessToken = (token) =>
  verify(token, process.env.TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    algorithm: process.env.ACCESS_TOKEN_ALGO,
  });

export const createaRefreshToken = (data) =>
  sign(data, process.env.TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    algorithm: process.env.REFRESH_TOKEN_ALGO,
  });

export const decryptRefreshToken = (token) =>
  verify(token, process.env.TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    algorithm: process.env.REFRESH_TOKEN_ALGO,
  });
