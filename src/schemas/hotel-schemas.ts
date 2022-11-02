import { CreateHotelParams, UpdateRoomParams } from '@/repositories/hotel-repository';
import Joi from 'joi';

export const hotelSchema = Joi.object<CreateHotelParams>({
  hotelId: Joi.number().required(),
  roomId: Joi.number().required(),
});

export const roomSchema = Joi.object<UpdateRoomParams>({
  number: Joi.string().required(),
  type: Joi.string().required(),
  hotelId: Joi.number().required(),
  maxVacancies: Joi.number().required(),
  availableVacancies: Joi.number().required(),
  updatedAt: Joi.date().required(),
});
