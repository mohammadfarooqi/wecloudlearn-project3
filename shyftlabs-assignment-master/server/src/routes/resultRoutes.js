import express from 'express';
import { get, create } from '../controllers/resultController.js';

const router = express.Router();

router.get('/', get);
router.post('/', create);

export default router;
