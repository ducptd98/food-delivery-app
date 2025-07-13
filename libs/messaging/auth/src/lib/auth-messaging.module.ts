import { RabbitMqModule } from '@food-delivery-app/rabbitmq';
import { Module } from '@nestjs/common';
import { AuthProducerService } from './producers/auth-producer.service';

@Module({
  imports: [RabbitMqModule.register()],
  providers: [AuthProducerService],
  exports: [AuthProducerService],
})
export class AuthMessagingModule {}
