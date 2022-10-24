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

export async function getPayment(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  
  await paymentService.getPayment(userId);

  return res.status(httpStatus.OK).send("ok");
}

export async function payment(req: AuthenticatedRequest, res: Response) {
  const card = req.body;
  const { userId } = req;

  await paymentService.payment(card, userId)

  return res.status(httpStatus.OK).send("ok");
}
