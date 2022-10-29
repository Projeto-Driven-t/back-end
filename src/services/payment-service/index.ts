import { notFoundError, unauthorizedPayment } from '@/errors';
import paymentRepository, { CreatePaymentParams, CreateTicketParams } from '@/repositories/payment-repository';
import { Accommodation, Modality, Payment, Ticket } from '@prisma/client';

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

async function ticket(ticketData: CreateTicketParams, userId: number): Promise<Ticket> {
  const ticket = await paymentRepository.createTicket(ticketData, userId);
  return ticket;
}

async function getTicket(userId: number): Promise<Ticket> {
  const ticket = await paymentRepository.findTicket(userId);
  return ticket;
}

const paymentService = {
  checksThePayment,
  getModalities,
  getAccommodations,
  payment,
  ticket,
  getTicket,
};

export default paymentService;
