import { AuthenticatedRequest } from '@/middlewares';
import hotelService from '@/services/hotel-service';
import { Response } from 'express';
import httpStatus from 'http-status';

export async function getHotels(req: AuthenticatedRequest, res: Response) {
  const hotels = await hotelService.getHotels();
  return res.status(httpStatus.OK).send(hotels);
}

export async function getHotelById(req: AuthenticatedRequest, res: Response) {
  const { id } = req.params;
  const hotel = await hotelService.getHotelById(Number(id));
  return res.status(httpStatus.OK).send(hotel);
}

const hotelController = {
  getHotels,
  getHotelById,
};

export default hotelController;
