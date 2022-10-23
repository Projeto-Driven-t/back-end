import { getTickets } from '@/controllers/payment-controller';
import { authenticateToken } from '@/middlewares';
import { Router } from 'express';

const paymentRouter = Router();

paymentRouter.get('/', getTickets);

export { paymentRouter };
