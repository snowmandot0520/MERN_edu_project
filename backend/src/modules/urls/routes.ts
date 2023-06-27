import express from 'express';

import { createShortUrl, getShortUrl } from './controller';
import { validateCreateShortUrlRequest } from './validators';

const router = express.Router();

router.post('/url/short', validateCreateShortUrlRequest(), createShortUrl);
router.get('/url/:urlId', getShortUrl);

export default router;
