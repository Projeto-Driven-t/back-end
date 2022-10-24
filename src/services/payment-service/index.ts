import { notFoundError, unauthorizedPayment } from '@/errors';
import paymentRepository, { CreatePaymentParams } from '@/repositories/payment-repository';
import { Accommodation, Modality, Payment } from '@prisma/client';

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

async function checksThePayment(userId: number): Promise<Payment> {
  const findPayment = await paymentRepository.findFirst(userId);
  if (!findPayment) throw unauthorizedPayment();

  return findPayment;
}

async function payment(paymentData: CreatePaymentParams, userId: number): Promise<void> {
  await paymentRepository.create(paymentData, userId);
}

const paymentService = {
  checksThePayment,
  getModalities,
  getAccommodations,
  payment,
};

export default paymentService;
