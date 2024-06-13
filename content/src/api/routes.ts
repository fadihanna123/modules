import { Router } from 'express';
import {
  addContent,
  deleteContent,
  getContent,
  updateContent,
} from 'controllers';

const router: Router = Router();

router.get<Routes>('/content', getContent);
router.post<Routes>('/content/add', addContent);
router.put<Routes>('/content/:id', updateContent);
router.delete<Routes>('/content/:id', deleteContent);

export default router;
