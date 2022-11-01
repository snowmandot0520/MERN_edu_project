import express from 'express';

import { createNewUser } from './controller';
import { validateCreateUserRequest } from './validators';

const router = express.Router();

router.post('/users/singup', validateCreateUserRequest(), createNewUser);

export default router;
