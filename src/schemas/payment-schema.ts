import { CreatePaymentParams } from '@/repositories/payment-repository';
import Joi from 'joi';

export const paymentSchema = Joi.object<CreatePaymentParams>({
  name: Joi.string().required(),
  cardNumber: Joi.string()
    .pattern(/^[0-9]+$/)
    .required(),
  expirationDate: Joi.string().required(),
  cvv: Joi.string().min(3).max(3).required(),
  totalValue: Joi.string().required()
});
