import { sendResponse, decryptAccessToken } from '../utils'

export const isAuthenticated = async (req, res, next) => {
  const token = req.header('token');

  try {
    if (!token) {
      return sendResponse(res, 401, { tokenExpired: 0 }, 'Failed to Authenticate');
    }

    const decoded = decryptAccessToken(token);

    // if everything is good, save to request for use in other routes
    req.user = decoded;
    next();
  } catch (err) {
    if (err?.['name'] === 'TokenExpiredError') {
      return sendResponse(res, 401, { tokenExpired: 1 }, 'Token Expired');
    }
    if (err?.['name'] === 'JsonWebTokenError') {
      return sendResponse(res, 401, { tokenExpired: 0 }, 'Corrupt Token');
    }
  }
  return 0;
};