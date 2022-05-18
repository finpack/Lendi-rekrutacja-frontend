import {CompatibilityEvent} from 'h3';
import {User} from '~/models/user';
const BAD_REQUEST = 400;
type ValidationStatus = {
  statusCode: number
  statusMessage: string
}

export const isEmailValid = (email: string): boolean => {
  return !!String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validateModel = async (body: Partial<User>): Promise<ValidationStatus | true> => {
  if (body.email && body.firstName && body.lastName && body.phone) {
    if (isEmailValid(body.email)) {
      return true
    } else return {
      statusCode: BAD_REQUEST,
      statusMessage: 'Email is invalid',
    }
  } else return {
    statusCode: BAD_REQUEST,
    statusMessage: 'Model is invalid',
  }
}
