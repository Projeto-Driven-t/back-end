import { ApplicationError } from '@/protocols';

export function unauthorizedPayment(): ApplicationError {
  return {
    name: 'UnauthorizedPayment',
    message: 'Your payment was not authorized',
  };
}
