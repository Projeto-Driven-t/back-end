import { conflictError, notFoundError } from '@/errors';
import hotelRepository, { CreateHotelParams, UpdateRoomParams } from '@/repositories/hotel-repository';
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

async function bookHotel(hosting: CreateHotelParams, userId: number): Promise<void> {
  const bookedHotel = await hotelRepository.findBookedHotel(userId);

  if (bookedHotel) throw conflictError('Você já possui uma reserva');

  await hotelRepository.bookHotel(hosting, userId);
}

async function updateRoom(roomData: UpdateRoomParams, userId: number) {
  const bookedHotel = await hotelRepository.findBookedHotel(userId);
  const { roomId } = bookedHotel;

  if (!bookedHotel) throw notFoundError();

  await hotelRepository.updateRoom(roomData, roomId);
}

async function deleteReservation(userId: number): Promise<void> {
  const bookedHotel = await hotelRepository.findBookedHotel(userId);
  const { id } = bookedHotel;

  if (!bookHotel) throw notFoundError();

  await hotelRepository.deleteReservation(id);
}

const hotelService = {
  deleteReservation,
  getHotels,
  getHotelById,
  bookHotel,
  updateRoom,
};

export default hotelService;
