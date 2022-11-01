import express, { Request, Response } from 'express';

import { sendResponse } from '../../utils/send-response';
import { reponseMessages } from '../../constants/response-messages';

const router = express.Router();

router.get('/users', (req: Request, res: Response) => {
  return sendResponse(res, 200, { users: [] }, reponseMessages.genericSuccess);
});

export default router;
