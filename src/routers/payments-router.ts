import { Router } from 'express';
import { getPayment, payment } from '@/controllers';
import { authenticateToken, validateBody } from '@/middlewares';
import { paymentSchema } from '@/schemas';

const paymentRouter = Router();

paymentRouter
    .all('/*', authenticateToken)
    .get('/', getPayment)
    .post('/', validateBody(paymentSchema), payment)

export { paymentRouter };