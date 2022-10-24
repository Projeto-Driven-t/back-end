import paymentRepository from '@/repositories/payment-repository/index';
import { Payment } from '@prisma/client';
export type CreatePaymentParams = Pick<Payment, 'cardNumber'|'name'|'validThru'>;

async function getPayment(userId: number) {
    const findPayment = await paymentRepository.findFirst(userId)
    if(!findPayment) { return null }

    return findPayment;
}

async function payment(card: CreatePaymentParams, userId: number) {
    await paymentRepository.create(card, userId)
}

const paymentService = {
    payment,
    getPayment
  };
  
export default paymentService;