import { AuthenticatedRequest } from '@/middlewares';
import paymentService from '@/services/payment-service';
import { Response } from 'express';
import httpStatus from 'http-status';

export async function getTickets(req: AuthenticatedRequest, res: Response) {
  const tickets = await paymentService.getTickets();
  return res.status(httpStatus.OK).send(tickets);
}
