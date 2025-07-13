import { RabbitMqModule } from '@food-delivery-app/rabbitmq';
import { UserDataAccessModule } from '@food-delivery-app/user-data-access';
import { Module } from '@nestjs/common';
import { UserConsumerService } from './consumers/user-consumer.service';

@Module({
  imports: [RabbitMqModule.register(), UserDataAccessModule],
  providers: [UserConsumerService],
  exports: [],
})
export class UserMessagingModule {}
