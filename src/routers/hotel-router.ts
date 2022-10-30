import hotelController from '@/controllers/hotel-controller';

import { authenticateToken, validateBody } from '@/middlewares';

import { Router } from 'express';

const hotelRouter = Router();

hotelRouter.all('/*', authenticateToken).get('/', hotelController.getHotels).get('/:id', hotelController.getHotelById);

export { hotelRouter };
