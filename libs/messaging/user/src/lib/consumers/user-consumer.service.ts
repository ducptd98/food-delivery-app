import { USER_ROUTING_KEY } from '@food-delivery-app/common';
import {
  RabbitRPCWithHandler,
  USER_EXCHANGE,
} from '@food-delivery-app/rabbitmq';
import { UsersRepository } from '@food-delivery-app/user-data-access';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserConsumerService {
  constructor(private readonly usersRepository: UsersRepository) {}

  @RabbitRPCWithHandler({
    exchange: USER_EXCHANGE,
    routingKey: USER_ROUTING_KEY.FIND_USER_BY_ID,
    queue: 'user_service.cmd.find-by-id',
    queueOptions: {
      deadLetterExchange: 'user_service.dlx_user_service',
      deadLetterRoutingKey: `dlx.log`,
    },
  })
  public async findUserById(payload: { userId: number }) {
    const { userId } = payload || {};
    return this.usersRepository.findById(userId);
  }

  @RabbitRPCWithHandler({
    exchange: USER_EXCHANGE,
    routingKey: USER_ROUTING_KEY.FIND_USER_BY_EMAIL,
    queue: 'user_service.cmd.find-by-email',
    queueOptions: {
      deadLetterExchange: 'user_service.dlx_user_service',
      deadLetterRoutingKey: `dlx.log`,
    },
  })
  public async findUserByEmail(payload: { email: string }) {
    const { email } = payload || {};
    return this.usersRepository.findByEmail(email);
  }
}
