import { Injectable } from '@nestjs/common';
import { RabbitmqConstant } from '../constants/rabbitmq.constant';
import { RabbitMQConfig } from '@golevelup/nestjs-rabbitmq';
import { env } from '@food-delivery-app/utils';

@Injectable()
export class RabbitMqService {
  constructor() {}

  public getRabbitMqConfig(): RabbitMQConfig {
    const uri = `amqp://${env.RABBITMQ_DEFAULT_USER}:${env.RABBITMQ_DEFAULT_PASS}@${env.RABBITMQ_HOST}:${env.RABBITMQ_PORT}/${env.RABBITMQ_DEFAULT_VHOST}`;
    console.log('-> uri', uri);
    return {
      uri,
      connectionInitOptions: { wait: false },
    };
  }

  // public getRabbitMqConfig(): RabbitMQConfig {
  //   return {
  //     uri: 'amqp://localhost:5672',
  //     connectionInitOptions: { wait: false },
  //   };
  // }
}
