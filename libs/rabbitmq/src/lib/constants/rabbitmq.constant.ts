import { RabbitMQExchangeConfig } from '@golevelup/nestjs-rabbitmq';

export class RabbitmqConstant {
  public static RABBITMQ_ERLANG_COOKIE = 'RABBITMQ_ERLANG_COOKIE';
  public static RABBITMQ_DEFAULT_VHOST = 'RABBITMQ_DEFAULT_VHOST';
  public static RABBITMQ_DEFAULT_USER = 'RABBITMQ_DEFAULT_USER';
  public static RABBITMQ_DEFAULT_PASS = 'RABBITMQ_DEFAULT_PASS';
  public static RABBITMQ_HOST = 'RABBITMQ_HOST';
  public static RABBITMQ_PORT = 'RABBITMQ_PORT';
}
export const USER_EXCHANGE = 'user_service.user';

export const USER_EXCHANGES_CONFIG: RabbitMQExchangeConfig[] = [
  {
    name: USER_EXCHANGE,
    type: 'topic',
  },
];
