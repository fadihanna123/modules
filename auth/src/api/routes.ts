import { Router } from 'express';

import { doLogin } from '../controllers';

const router = Router();

// Inloggningskontroll.
router.post<Routes>('/login', doLogin);

export default router;
