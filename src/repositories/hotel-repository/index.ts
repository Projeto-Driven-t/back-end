import { prisma } from '@/config';
import { Hotel } from '@prisma/client';

async function findHotels() {
  return prisma.hotel.findMany();
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
