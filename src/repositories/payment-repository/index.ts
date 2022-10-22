import { prisma } from '@/config';

async function findMany() {
  return prisma.ticket.findMany();
}

const paymentRepository = {
  findMany,
};

export default paymentRepository;
