import { prisma } from '@/config';

async function findModalities() {
  return prisma.modality.findMany();
}

const paymentRepository = {
  findModalities,
};

export default paymentRepository;
