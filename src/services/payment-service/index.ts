import { notFoundError } from '@/errors';
import paymentRepository from '@/repositories/payment-repository';
import { Accommodation, Modality } from '@prisma/client';

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

const paymentService = {
  getModalities,
  getAccommodations,
};

export default paymentService;
