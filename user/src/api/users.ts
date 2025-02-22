import { getUsers } from '@core/controllers/getUsers';
import protectRoute from '@core/controllers/protectRoute';
import { Router } from 'express';

const router: Router = Router();

// Register process
router.get<Routes>('/users', protectRoute, getUsers);

export default router;
