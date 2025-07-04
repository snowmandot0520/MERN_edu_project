import { sendResponse, decryptAccessToken, HttpStatusCode } from '../utils'

const whiteListEndpoints = ["/urls/short"]

export const isAuthenticated = async (req, res, next) => {
  const token = req.header('Authorization');
  
  try {
    if (!token) {
        if(whiteListEndpoints.includes(req.url)) {
          return next()
        }
      return sendResponse(res, HttpStatusCode.Unauthorized, { tokenExpired: 0 }, 'Failed to Authenticate');
    }

    const decoded = decryptAccessToken(token);

    // if everything is good, save to request for use in other routes
    req.user = decoded;

    next();
  } catch (err) {
    if (err?.['name'] === 'TokenExpiredError') {
      return sendResponse(res, HttpStatusCode.Unauthorized, { tokenExpired: 1 }, 'Token Expired');
    }
    if (err?.['name'] === 'JsonWebTokenError') {
      return sendResponse(res, HttpStatusCode.Unauthorized, { tokenExpired: 0 }, 'Corrupt Token');
    }
    if (err?.['name'] === 'validationError') {
      return sendResponse(res, HttpStatusCode.Unauthorized, { tokenExpired: 0 }, 'validationError');
    }

  }
  return 0;
};