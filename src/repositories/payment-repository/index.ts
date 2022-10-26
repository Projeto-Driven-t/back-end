import { prisma } from '@/config';
import { Payment, Ticket } from '@prisma/client';

async function findModalities() {
  return prisma.modality.findMany();
}

async function findAccommodations() {
  return prisma.accommodation.findMany();
}

async function findFirst(userId: number) {
  return prisma.payment.findFirst({
    where: { userId },
  });
}

async function create(payment: CreatePaymentParams, userId: number) {
  return prisma.payment.create({
    data: { ...payment, userId: userId },
  });
}

async function createTicket(ticket: CreateTicketParams, userId: number) {
  return prisma.ticket.create({
    data: { ...ticket, userId: userId },
  });
}

export type CreatePaymentParams = Omit<Payment, 'id' | 'userId' | 'createdAt' | 'updatedAt'>;
export type CreateTicketParams = Omit<Ticket, 'id' | 'userId' | 'createdAt' | 'updatedAt'>;

const paymentRepository = {
  create,
  createTicket,
  findFirst,
  findModalities,
  findAccommodations,
};

export default paymentRepository;
