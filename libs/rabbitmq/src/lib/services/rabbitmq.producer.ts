import { Injectable } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { transformActionToRoutingKey } from '@food-delivery-app/utils';

@Injectable()
export class RabbitmqProducer {
  constructor(private readonly _amqpConnection: AmqpConnection) {}

  public async userAction<T>(action: any, params?: unknown) {
    return this._amqpConnection.request<T>({
      exchange: '',
      routingKey: transformActionToRoutingKey('user', action),
      payload: {
        action,
        params,
      },
    });
  }
}
