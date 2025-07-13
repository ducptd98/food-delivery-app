import { User } from '@food-delivery-app/prisma-user-service';
import { RabbitmqProducer } from '@food-delivery-app/rabbitmq';
import { Injectable } from '@nestjs/common';
import { USER_ROUTING_KEY } from '@food-delivery-app/common';

@Injectable()
export class UserProducerService {
  constructor(private readonly producer: RabbitmqProducer) {}

  async findUserById(userId: string): Promise<User> {
    return this.producer.userAction<User>(USER_ROUTING_KEY.FIND_USER_BY_ID, {
      userId,
    });
  }
  async findUserByEmail(email: string): Promise<User> {
    return this.producer.userAction<User>(USER_ROUTING_KEY.FIND_USER_BY_EMAIL, {
      email,
    });
  }
}
