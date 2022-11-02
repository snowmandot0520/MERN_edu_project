import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import { create } from './services';
import { reponseMessages } from '../../constants/response-messages';
import { sendResponse } from '../../utils/send-response';
import {
  handleCustomError,
  extractErrors,
} from '../../utils/handle-custom-errors';

export const createNewUser = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const extractedErrors = extractErrors(errors);
      return sendResponse(res, 422, {}, { errors: extractedErrors });
    }

    const { email, firstName, lastName, password } = req.body;
    const data = await create({
      email,
      firstName,
      lastName,
      password,
    });

    return sendResponse(res, 201, { ...data }, reponseMessages.genericSuccess);
  } catch (err) {
    return handleCustomError(res, err);
  }
};
