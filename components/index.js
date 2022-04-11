import express from 'express';
import userRouter from './user/userRoutes.js';
import transactionRouter from './transaction/transactionRouters.js';

const router = express.Router();

router.use('/user', userRouter);
router.use('/transaction', transactionRouter);

export default router;
