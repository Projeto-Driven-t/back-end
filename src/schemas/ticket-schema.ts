import { CreateTicketParams } from '@/repositories/payment-repository';
import Joi from 'joi';

export const ticketSchema = Joi.object<CreateTicketParams>({
  modality: Joi.string().required(),
  modalityPrice: Joi.number().required(),
  accommodation: Joi.string().required(),
  accommodationPrice: Joi.number().required(),
  totalValue: Joi.number().required(),
});
