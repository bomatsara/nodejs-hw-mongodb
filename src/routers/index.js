import { Router } from 'express';
import constantsRouter from './contacts.js';
import authRouter from './auth.js';

const router = Router();

router.use('/contacts', constantsRouter);
router.use('/auth', authRouter);

export default router;
