import { checksThePayment, getAccommodations, getModalities, payment } from '@/controllers/payment-controller';
import { authenticateToken, validateBody } from '@/middlewares';
import { paymentSchema } from '@/schemas';
import { Router } from 'express';

const paymentRouter = Router();

paymentRouter
  .all('/*', authenticateToken)
  .get('/modality', getModalities)
  .get('/accommodation', getAccommodations)
  .get('/', checksThePayment)
  .post('/', validateBody(paymentSchema), payment);

export { paymentRouter };
