import { Router } from 'express';

import { doRegister } from '@core/controllers';

const router: Router = Router();

// Registreringsprocess.
router.post<Routes>('/register', doRegister);

export default router;
