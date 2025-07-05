import { Injectable } from '@nestjs/common';
import { ackErrorHandler, Nack, RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { UsersRepository } from '../repositories/user.repository';
import { USER_EXCHANGE, USER_ROUTING_KEY } from '@food-delivery-app/rabbitmq';

@Injectable()
export class UserConsumer {
  constructor(private _userRepository: UsersRepository) {}

  @RabbitRPC({
    exchange: USER_EXCHANGE,
    routingKey: USER_ROUTING_KEY.FIND_USER_BY_ID,
    queue: 'user_service.user-action.cmd.find-by-id.gateway.user',
    queueOptions: {
      deadLetterExchange: 'user_service.dlx_user_service',
      deadLetterRoutingKey: `dlx.log`,
    },
    errorHandler: ackErrorHandler,
  })
  public async findUserById(action: any) {
    const { id } = action.params || {};
    try {
      return this._userRepository.findById(id);
    } catch (error) {
      return new Nack();
    }
  }
}
