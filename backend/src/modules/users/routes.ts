import express from 'express';

import { createNewUser, loginUser, getUser } from './controller';
import { validateCreateUserRequest, validateSignInUserRequest } from './validators';
import { isAuthenticated } from '../../middlewares/authenticated';

const router = express.Router();

router.post('/users/signup', validateCreateUserRequest(), createNewUser);
router.post('/users/signin', validateSignInUserRequest(), loginUser);
router.get('/users/:userId', isAuthenticated, getUser);

export default router;
