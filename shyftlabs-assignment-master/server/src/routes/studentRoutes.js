import express from 'express';
import { get, create, del } from '../controllers/studentController.js';

const router = express.Router();

router.get('/', get);
router.post('/', create);
router.delete('/:studentId', del);

export default router;
