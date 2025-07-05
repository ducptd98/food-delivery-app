import { DynamicModule, Module } from '@nestjs/common';
import {
  MessageHandlerErrorBehavior,
  RabbitMQExchangeConfig,
  RabbitMQModule,
} from '@golevelup/nestjs-rabbitmq';
import { RabbitMqSubModule } from './rabbitmq-sub.module';
import { RabbitmqProducer, RabbitMqService } from './services';
import { rabbitMqConfig } from './rabbitmq.config';

@Module({})
export class RabbitMqModule {
  static register(): DynamicModule {
    return {
      module: RabbitMqModule,
      providers: [RabbitmqProducer],
      exports: [RabbitmqProducer],
      imports: [
        RabbitMQModule.forRootAsync({
          imports: [RabbitMqSubModule],
          useFactory: async (rabbitService: RabbitMqService) => {
            return {
              ...rabbitService.getRabbitMqConfig(),
              exchanges: rabbitMqConfig.exchanges,
              defaultRpcErrorBehavior: MessageHandlerErrorBehavior.NACK,
              defaultSubscribeErrorBehavior: MessageHandlerErrorBehavior.NACK,
            };
          },
          inject: [RabbitMqService],
        }),
      ],
    };
  }
}
