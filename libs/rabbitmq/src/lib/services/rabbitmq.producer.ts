import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { USER_EXCHANGE } from '../constants/rabbitmq.constant';

@Injectable()
export class RabbitmqProducer {
  constructor(private readonly _amqpConnection: AmqpConnection) {}

  public async userAction<T>(routingKey: string, payload: object): Promise<T> {
    return this._amqpConnection.request<T>({
      exchange: USER_EXCHANGE,
      routingKey,
      payload,
    });
  }
}
