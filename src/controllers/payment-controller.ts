import { AuthenticatedRequest } from '@/middlewares';
import paymentService from '@/services/payment-service';
import { Response } from 'express';
import httpStatus from 'http-status';

export async function getModalities(req: AuthenticatedRequest, res: Response) {
  const modalities = await paymentService.getModalities();
  return res.status(httpStatus.OK).send(modalities);
}
