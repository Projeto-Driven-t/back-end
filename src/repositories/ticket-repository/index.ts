import { prisma } from '@/config';

async function getTickets() {
  return prisma.ticket.findMany();
}

const ticketsRepository = {
  getTickets,
};

export default ticketsRepository;
