import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import { create, login, user } from './services';
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

export const loginUser = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const extractedErrors = extractErrors(errors);
      return sendResponse(res, 422, {}, { errors: extractedErrors });
    }

    const { email, password } = req.body;
    const data = await login({ email, password });

    return sendResponse(res, 200, { ...data }, reponseMessages.genericSuccess);
  } catch (err) {
    return handleCustomError(res, err);
  }
};

export const getUser = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const extractedErrors = extractErrors(errors);
      return sendResponse(res, 422, {}, { errors: extractedErrors });
    }

    const { userId } = req.params;
    console.log("userId", userId)

    const data = await user(userId);

    return sendResponse(res, 200, { ...data }, reponseMessages.genericSuccess);
  } catch (err) {
    return handleCustomError(res, err);
  }
};