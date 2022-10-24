import { prisma } from '@/config';

async function findModalities() {
  return prisma.modality.findMany();
}

async function findAccommodations() {
  return prisma.accommodation.findMany();
}

const paymentRepository = {
  findModalities,
  findAccommodations,
};

export default paymentRepository;
