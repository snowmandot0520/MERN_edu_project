import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import { create, get } from './services';
import { reponseMessages } from '../../constants/response-messages';
import { sendResponse } from '../../utils/send-response';
import {
  handleCustomError,
  extractErrors,
} from '../../utils/handle-custom-errors';

export const createShortUrl = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const extractedErrors = extractErrors(errors);
      return sendResponse(res, 422, {}, { errors: extractedErrors });
    }

    const { originalUrl } = req.body;

    const data = await create({ originalUrl });

    return sendResponse(res, 201, { ...data }, reponseMessages.genericSuccess);
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