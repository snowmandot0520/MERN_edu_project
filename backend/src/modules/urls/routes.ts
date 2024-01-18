import express from 'express';

import { createShortUrl, getShortUrl, getAllShortUrlsByUser } from './controller';
import { validateCreateShortUrlRequest } from './validators';
import { isAuthenticated } from '../../middlewares/authenticated';

const router = express.Router();

router.get('/urls/list',isAuthenticated, getAllShortUrlsByUser);
router.post('/urls/short', validateCreateShortUrlRequest(), isAuthenticated, createShortUrl);
router.get('/urls/:urlId', getShortUrl);

export default router;
