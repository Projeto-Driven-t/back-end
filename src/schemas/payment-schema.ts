import Joi from 'joi';
import { CreatePaymentParams } from '@/services/payment-service';

export const paymentSchema = Joi.object<CreatePaymentParams>({
  cardNumber: Joi.string().pattern(/^[0-9]+$/).required(),
  name: Joi.string().required(),
  validThru: Joi.string().required()
});
