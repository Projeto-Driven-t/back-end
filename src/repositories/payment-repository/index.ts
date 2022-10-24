import { prisma } from '@/config';
import { CreatePaymentParams } from '@/services/payment-service';

async function findFirst(userId: number) {
    return prisma.payment.findFirst({
        where: {
            userId: userId
        }
    });
}

async function create(card: CreatePaymentParams, userId: number) {
  return prisma.payment.create({
    data: {
        cardNumber: card.cardNumber,
        name: card.name,
        value: '12',
        validThru: card.validThru,
        userId: userId
    }
  });
}

async function findModalities() {
  return prisma.modality.findMany();
}

async function findAccommodations() {
  return prisma.accommodation.findMany();
}

const paymentRepository = {
 create,
  findFirst,
  findModalities,
  findAccommodations,
};

export default paymentRepository;
