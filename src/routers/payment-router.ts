import {
  checksThePayment,
  getAccommodations,
  getModalities,
  payment,
  ticket,
  getTicket,
} from '@/controllers/payment-controller';
import { authenticateToken, validateBody } from '@/middlewares';
import { paymentSchema } from '@/schemas';
import { Router } from 'express';
import { ticketSchema } from '../schemas/ticket-schema';

const paymentRouter = Router();

paymentRouter
  .all('/*', authenticateToken)
  .get('/modality', getModalities)
  .get('/accommodation', getAccommodations)
  .get('/', checksThePayment)
  .post('/', validateBody(paymentSchema), payment)
  .post('/ticket', validateBody(ticketSchema), ticket)
  .get('/ticket', getTicket);

export { paymentRouter };
