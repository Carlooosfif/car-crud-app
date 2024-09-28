import { Router } from 'express';
import { getCars } from '../controllers/carController';

const router = Router();

router.get('/', getCars);

export default router;
