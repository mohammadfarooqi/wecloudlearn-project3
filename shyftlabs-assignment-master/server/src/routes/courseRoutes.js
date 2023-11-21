import express from 'express';
import { get, create, del } from '../controllers/courseController.js';

const router = express.Router();

router.get('/', get);
router.post('/', create);
router.delete('/:courseId', del);

export default router;
