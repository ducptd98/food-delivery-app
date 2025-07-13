import {
  MessageHandlerErrorBehavior,
  RabbitMQModule,
} from '@golevelup/nestjs-rabbitmq';
import { DynamicModule, Module } from '@nestjs/common';
import { USER_EXCHANGES_CONFIG } from './constants/rabbitmq.constant';
import { RabbitMqSubModule } from './rabbitmq-sub.module';
import { RabbitmqProducer, RabbitMqService } from './services';

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
              exchanges: [...USER_EXCHANGES_CONFIG],
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
