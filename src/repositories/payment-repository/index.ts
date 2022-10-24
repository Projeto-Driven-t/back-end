import { prisma } from '@/config';
import { CreatePaymentParams } from '@/services/payment-service';

async function findFirst(userId: number) {
    return prisma.payment.findFirst({
        where: {
            userId: userId
        }
    })
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

const paymentRepository = {
  create,
  findFirst
};

export default paymentRepository;
