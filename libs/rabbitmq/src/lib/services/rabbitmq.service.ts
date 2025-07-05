import { Injectable } from '@nestjs/common';
import { RabbitmqConstant } from '../constants/rabbitmq.constant';
import { RabbitMQConfig } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class RabbitMqService {
  constructor() {}

  public getRabbitMqConfig(): RabbitMQConfig {
    const uri = `amqp://${
      process.env[RabbitmqConstant.RABBITMQ_DEFAULT_USER]
    }:${process.env[RabbitmqConstant.RABBITMQ_DEFAULT_PASS]}@${
      process.env[RabbitmqConstant.RABBITMQ_HOST]
    }:${process.env[RabbitmqConstant.RABBITMQ_PORT]}${
      process.env[RabbitmqConstant.RABBITMQ_DEFAULT_VHOST]
    }`;
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
