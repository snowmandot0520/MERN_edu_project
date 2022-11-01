import * as express from "express";
import v1Routes from './v1';

const router = express.Router();

router.use('/api/v1', v1Routes);

export default router;