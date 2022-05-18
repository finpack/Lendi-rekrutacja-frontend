import {CompatibilityEvent} from 'h3';
import {User} from '~/models/user';
const BAD_REQUEST = 400;
type ValidationStatus = {
  statusCode: number
  statusMessage: string
}

export const validateModel = async (body: Partial<User>): Promise<ValidationStatus | true> => {
  if (body.email && body.firstName && body.lastName && body.phone) {
    return true
  } else return {
    statusCode: BAD_REQUEST,
    statusMessage: 'Model is invalid',
  }
}
