import * as express from "express";
import userRoutes from '../../modules/users/routes';
import urlsRoutes from '../../modules/urls/routes';

const router = express.Router();

router.use(userRoutes, urlsRoutes);

export default router;