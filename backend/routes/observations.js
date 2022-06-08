import express from 'express';
import { getObservation } from '../controllers/observations.js';

const router = express.Router();

router.get('/', getObservation);

export default router;
