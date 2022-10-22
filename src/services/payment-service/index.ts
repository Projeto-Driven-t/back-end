import { notFoundError } from '@/errors';
import paymentRepository from '@/repositories/payment-repository';
import { Ticket } from '@prisma/client';

async function getTickets(): Promise<Ticket[]> {
  const ticket = await paymentRepository.findMany();
  if (!ticket) throw notFoundError();

  return ticket;
}

const paymentService = {
  getTickets,
};

export default paymentService;
