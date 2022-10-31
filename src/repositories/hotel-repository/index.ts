import { prisma } from '@/config';
import { Hotel } from '@prisma/client';

async function findHotels() {
  const hotels = await prisma.hotel.findMany({
    include: {
      Room: true,
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
  return prisma.hotel.findUnique({
    where: { id },
  });
}

const hotelRepository = {
  findHotels,
  findHotelById,
};

export default hotelRepository;
