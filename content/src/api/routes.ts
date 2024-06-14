import { Router } from 'express';
import {
  addContent,
  deleteContent,
  getContent,
  updateContent,
} from 'controllers';
import { getContentById } from 'controllers/getContentById';

const router: Router = Router();

router.get<Routes>('/content', getContent);
router.get<Routes>('/content/:id', getContentById);
router.post<Routes>('/content/add', addContent);
router.put<Routes>('/content/:id', updateContent);
router.delete<Routes>('/content/:id', deleteContent);

export default router;
