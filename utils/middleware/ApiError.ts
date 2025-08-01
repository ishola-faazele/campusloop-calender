import { StatusCodes } from 'http-status-codes';

export class ApiError extends Error {
  statusCode: number;
  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class NotFoundError extends ApiError {
  constructor(path: string) {
    super(StatusCodes.NOT_FOUND, `The Requested path ${path} was not found.`);
  }
}

export class BadRequestError extends ApiError {
  constructor(message: string) {
    super(StatusCodes.BAD_REQUEST, message);
  }
}

export class CalenderItemAlreadyAdd extends ApiError {
  constructor(message: string = 'CalenderItem is already Added') {
    super(StatusCodes.CONFLICT, message);
  }
}
export class ValidationError extends BadRequestError {
  constructor(message: string = 'Invalid Calender Input Format') {
    super(message);
  }
}
