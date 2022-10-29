import { AuthenticatedRequest } from '@/middlewares';
import paymentService from '@/services/payment-service';
import { Response } from 'express';
import httpStatus from 'http-status';

export async function getModalities(req: AuthenticatedRequest, res: Response) {
  const modalities = await paymentService.getModalities();
  return res.status(httpStatus.OK).send(modalities);
}

export async function getAccommodations(req: AuthenticatedRequest, res: Response) {
  const accommodations = await paymentService.getAccommodations();
  return res.status(httpStatus.OK).send(accommodations);
}

export async function checksThePayment(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  const foundPayment = await paymentService.checksThePayment(userId);

  return res.status(httpStatus.OK).send(foundPayment);
}

export async function payment(req: AuthenticatedRequest, res: Response) {
  const paymentData = req.body;
  const { userId } = req;

  await paymentService.payment(paymentData, userId);

  return res.status(httpStatus.OK).send('ok');
}

export async function ticket(req: AuthenticatedRequest, res: Response) {
  const ticketData = req.body;
  const { userId } = req;

  const ticket = await paymentService.ticket(ticketData, userId);

  return res.status(httpStatus.OK).send(ticket);
}

export async function getTicket(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  const ticket = await paymentService.getTicket(userId);

  return res.status(httpStatus.OK).send(ticket);
}
