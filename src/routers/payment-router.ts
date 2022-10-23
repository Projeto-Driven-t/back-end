import { getModalities } from '@/controllers/payment-controller';
import { authenticateToken } from '@/middlewares';
import { Router } from 'express';

const paymentRouter = Router();

paymentRouter.all('/*', authenticateToken).get('/modality', getModalities);

export { paymentRouter };
