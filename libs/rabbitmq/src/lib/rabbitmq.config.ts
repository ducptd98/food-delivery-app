// import { USER_SERVICE_EXCHANGE } from './user-service';

import { RabbitMQExchangeConfig } from '@golevelup/nestjs-rabbitmq';
import { USER_ROUTING_KEY } from './constants/rabbitmq-exchange.constant';

export const rabbitMqConfig: { exchanges: RabbitMQExchangeConfig[] } = {
  exchanges: [...Object.values(USER_ROUTING_KEY)].map((routingKey) => ({
    name: routingKey,
    type: 'topic',
  })),
};
