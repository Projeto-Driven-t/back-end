import { prisma } from '@/config';
import { Hotel, HotelRoom, Room } from '@prisma/client';

async function findHotels() {
  const hotels = await prisma.hotel.findMany({
    include: {
      Room: {
        orderBy: {
          id: 'asc',
        },
      },
    },
  });

  for (let i = 0; i < hotels.length; i++) {
    const roomCount = await prisma.room.aggregate({
      where: {
        hotelId: hotels[i].id,
      },
      _sum: {
        availableVacancies: true,
      },
    });

    hotels[i].vacancies = roomCount._sum.availableVacancies;
  }

  return hotels;
}

async function findHotelById(id: number) {
  return await prisma.hotel.findUnique({
    where: { id },
  });
}

async function findBookedHotel(userId: number) {
  return await prisma.hotelRoom.findFirst({ where: { userId } });
}

async function bookHotel(hosting: CreateHotelParams, userId: number) {
  return await prisma.hotelRoom.create({
    data: { ...hosting, userId },
  });
}

async function findRoom(id: number) {
  return await prisma.room.findUnique({ where: { id } });
}

async function updateRoom(room: UpdateRoomParams, roomId: number) {
  return await prisma.room.update({
    where: { id: roomId },
    data: room,
  });
}

async function deleteReservation(id: number) {
  return await prisma.hotelRoom.delete({ where: { id } });
}

export type CreateHotelParams = Omit<HotelRoom, 'id' | 'userId' | 'createdAt' | 'updatedAt'>;
export type UpdateRoomParams = Omit<Room, 'id' | 'createdAt'>;

const hotelRepository = {
  deleteReservation,
  findHotels,
  findHotelById,
  findBookedHotel,
  findRoom,
  bookHotel,
  updateRoom,
};

export default hotelRepository;
