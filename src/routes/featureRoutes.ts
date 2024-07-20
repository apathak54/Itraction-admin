import { Router } from 'express';
import {
  createFeaturedWork,
  getFeaturedWorks,
  getFeaturedWorkById,
  updateFeaturedWork,
  deleteFeaturedWork,
} from '../controller/featureController';

const router = Router();

router.post('/', createFeaturedWork);
router.get('/', getFeaturedWorks);
router.get('/:id', getFeaturedWorkById);
router.put('/:id', updateFeaturedWork);
router.delete('/:id', deleteFeaturedWork);

export = router;
