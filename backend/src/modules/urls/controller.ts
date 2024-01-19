import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import { create, get, getAll } from './services';
import { reponseMessages } from '../../constants/responseMessages';
import { sendResponse } from '../../utils/sendResponse';
import {
  handleCustomError,
  extractErrors,
} from '../../utils/handleCustomErrors';

interface IUserRequest extends Request {
  user?: Record<string, string>
}

export const createShortUrl = async (req: IUserRequest, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const extractedErrors = extractErrors(errors);
      return sendResponse(res, 422, {}, { errors: extractedErrors });
    }
    
    const { originalUrl } = req.body;
    const baseURL = req.get('origin');
    const userId = req?.user?.id || '';

    const data = await create({ originalUrl, baseURL, userId });

    return sendResponse(res, 201, data, reponseMessages.genericSuccess);
  } catch (err) {
    return handleCustomError(res, err);
  }
};

export const getShortUrl = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const extractedErrors = extractErrors(errors);
      return sendResponse(res, 422, {}, { errors: extractedErrors });
    }

    const { urlId } = req.params;

    const originalUrl = await get(urlId);

    return sendResponse(res, 201, { originalUrl  }, reponseMessages.genericSuccess);
  } catch (err) {
    return handleCustomError(res, err);
  }
};

export const getAllShortUrlsByUser = async (req: IUserRequest, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const extractedErrors = extractErrors(errors);
      return sendResponse(res, 422, {}, { errors: extractedErrors });
    }

    const userId = req?.user?.id || '';

    const data = await getAll(userId);

    return sendResponse(res, 201, { data  }, reponseMessages.genericSuccess);
  } catch (err) {
    return handleCustomError(res, err);
  }
};