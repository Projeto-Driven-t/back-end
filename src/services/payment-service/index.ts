import { notFoundError } from '@/errors';
import paymentRepository from '@/repositories/payment-repository';
import { Modality } from '@prisma/client';

async function getModalities(): Promise<Modality[]> {
  const modalities = await paymentRepository.findModalities();
  if (!modalities) throw notFoundError();

  return modalities;
}

const paymentService = {
  getModalities,
};

export default paymentService;
