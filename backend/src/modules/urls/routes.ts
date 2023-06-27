import express from 'express';

import { createShortUrl } from './controller';
import { validateCreateShortUrlRequest } from './validators';

const router = express.Router();

router.post('/url/short', validateCreateShortUrlRequest(), createShortUrl);

export default router;
