import { notFoundError } from '@/errors';
import paymentRepository from '@/repositories/payment-repository';
import { Accommodation, Modality, Payment } from '@prisma/client';

export type CreatePaymentParams = Pick<Payment, 'cardNumber'|'name'|'validThru'>;

async function getModalities(): Promise<Modality[]> {
  const modalities = await paymentRepository.findModalities();
  if (!modalities) throw notFoundError();

  return modalities;
}

async function getAccommodations(): Promise<Accommodation[]> {
  const accommodations = await paymentRepository.findAccommodations();
  if (!accommodations) throw notFoundError();

  return accommodations;
}

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
  getModalities,
  getAccommodations,
};

export default paymentService;
