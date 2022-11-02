import hotelController, { bookHotel, deleteReservation, updateRoom } from '@/controllers/hotel-controller';

import { authenticateToken, validateBody } from '@/middlewares';
import { hotelSchema, roomSchema } from '@/schemas';

import { Router } from 'express';

const hotelRouter = Router();

hotelRouter
  .all('/*', authenticateToken)
  .get('/', hotelController.getHotels)
  .get('/:id', hotelController.getHotelById)
  .post('/', validateBody(hotelSchema), bookHotel)
  .put('/', validateBody(roomSchema), updateRoom)
  .delete('/', deleteReservation);

export { hotelRouter };
