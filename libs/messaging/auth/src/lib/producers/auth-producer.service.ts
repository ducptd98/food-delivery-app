import { USER_ROUTING_KEY } from '@food-delivery-app/common';
import { User } from '@food-delivery-app/prisma-user-service';
import { RabbitmqProducer } from '@food-delivery-app/rabbitmq';
import { Injectable } from '@nestjs/common';
import { TMessageQueueResponse } from '@food-delivery-app/types';

@Injectable()
export class AuthProducerService {
  constructor(private readonly producer: RabbitmqProducer) {}

  async findUserByEmail(email: string): Promise<TMessageQueueResponse<User>> {
    return this.producer.userAction(USER_ROUTING_KEY.FIND_USER_BY_EMAIL, {
      email,
    });
  }
}
