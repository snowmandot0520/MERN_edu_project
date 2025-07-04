import * as express from "express";
import v1Routes from './v1';
import auth from ./auth

const router = express.Router();

router.use('/api/v1', v1Routes);
router.use('/api/auth' , auth)

export default router;
