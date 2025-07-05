import { HttpException, HttpStatus } from '@nestjs/common';

export enum ErrorCode {
  NOT_FOUND = 'NOT_FOUND',
  BAD_REQUEST = 'BAD_REQUEST',
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
}

export class BadRequestError extends HttpException {
  constructor(message: string) {
    super(
      {
        message: message,
        errorCode: ErrorCode.BAD_REQUEST,
        status: HttpStatus.BAD_REQUEST,
      },
      HttpStatus.BAD_REQUEST
    );
    this.name = 'BadRequestError';
  }
}
export class NotFoundError extends HttpException {
  constructor(message: string) {
    super(
      {
        message: message,
        errorCode: ErrorCode.NOT_FOUND,
        status: HttpStatus.NOT_FOUND,
      },
      HttpStatus.NOT_FOUND
    );
    this.name = 'NotFoundError';
  }
}
export class UnauthorizedError extends HttpException {
  constructor(message: string) {
    super(
      {
        message: message,
        errorCode: ErrorCode.UNAUTHORIZED,
        status: HttpStatus.UNAUTHORIZED,
      },
      HttpStatus.UNAUTHORIZED
    );
    this.name = 'UnauthorizedError';
  }
}
export class ForbiddenError extends HttpException {
  constructor(message: string) {
    super(
      {
        message: message,
        errorCode: ErrorCode.FORBIDDEN,
        status: HttpStatus.FORBIDDEN,
      },
      HttpStatus.FORBIDDEN
    );
    this.name = 'ForbiddenError';
  }
}
export class InternalServerError extends HttpException {
  constructor(message: string) {
    super(
      {
        message: message,
        errorCode: ErrorCode.INTERNAL_SERVER_ERROR,
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      },
      HttpStatus.INTERNAL_SERVER_ERROR
    );
    this.name = 'InternalServerError';
  }
}
