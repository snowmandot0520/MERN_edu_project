import * as express from "express";
import userRoutes from '../../modules/users/routes';

const router = express.Router();

router.use(userRoutes);

export default router;