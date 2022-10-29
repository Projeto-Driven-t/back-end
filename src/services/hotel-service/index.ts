import { notFoundError } from '@/errors';
import hotelRepository from '@/repositories/hotel-repository';
import { Hotel } from '@prisma/client';

async function getHotels(): Promise<Hotel[]> {
  const hotels = await hotelRepository.findHotels();
  if (!hotels) throw notFoundError();

  return hotels;
}

async function getHotelById(id: number): Promise<Hotel> {
  const hotel = await hotelRepository.findHotelById(id);
  if (!hotel) throw notFoundError();

  return hotel;
}

const hotelService = {
  getHotels,
  getHotelById,
};

export default hotelService;
