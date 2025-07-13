export enum ResponseStatus {
  Success,
  Failed,
}

export class BaseResponseModel<T = null> {
  success: boolean;
  message: string | undefined;
  data: T;
  statusCode: number;

  constructor(
    status: ResponseStatus,
    data: T,
    statusCode: number,
    message?: string
  ) {
    this.success = status === ResponseStatus.Success;
    this.message = message;
    this.data = data;
    this.statusCode = statusCode;
  }
}
