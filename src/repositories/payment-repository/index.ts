import { prisma } from '@/config';
import { Payment } from '@prisma/client';

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

export type CreatePaymentParams = Omit<Payment, 'id' | 'userId' | 'createdAt' | 'updatedAt'>;

const paymentRepository = {
  create,
  findFirst,
  findModalities,
  findAccommodations,
};

export default paymentRepository;
