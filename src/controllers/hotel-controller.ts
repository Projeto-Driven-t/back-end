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

export async function bookHotel(req: AuthenticatedRequest, res: Response) {
  const hosting = req.body;
  const { userId } = req;

  await hotelService.bookHotel(hosting, userId);

  return res.status(httpStatus.OK).send('ok');
}

export async function updateRoom(req: AuthenticatedRequest, res: Response) {
  const roomData = req.body;
  const { userId } = req;

  await hotelService.updateRoom(roomData, userId);

  return res.status(httpStatus.OK).send('ok');
}

export async function deleteReservation(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  await hotelService.deleteReservation(userId);

  return res.status(httpStatus.OK).send('Deleted hotel reservation');
}

const hotelController = {
  getHotels,
  getHotelById,
};

export default hotelController;
