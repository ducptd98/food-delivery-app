import { Module } from '@nestjs/common';
import { RabbitMqService } from './services';

@Module({
  imports: [],
  exports: [RabbitMqService],
  providers: [RabbitMqService],
})
export class RabbitMqSubModule {}
