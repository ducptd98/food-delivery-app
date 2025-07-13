import {
  RabbitSubscribe,
  RabbitHandlerConfig,
  Nack,
} from '@golevelup/nestjs-rabbitmq';
import { RabbitHandler } from '../inteceptors/rabbitmq.interceptor';

export function RabbitSubscribeWithHandler<TInput>(
  config: Pick<
    RabbitHandlerConfig,
    | 'queue'
    | 'name'
    | 'deserializer'
    | 'connection'
    | 'exchange'
    | 'routingKey'
    | 'queueOptions'
    | 'errorBehavior'
    | 'errorHandler'
    | 'assertQueueErrorHandler'
    | 'createQueueIfNotExists'
    | 'allowNonJsonMessages'
    | 'usePersistentReplyTo'
    | 'batchOptions'
  >
): MethodDecorator {
  return (target, propertyKey, descriptor) => {
    const originalMethod = descriptor.value;

    if (!originalMethod) {
      throw new Nack(false);
    }

    descriptor.value = function (this: any, ...args: any[]) {
      const boundHandler = (originalMethod as unknown as Function).bind(this);
      return RabbitHandler<TInput>(boundHandler)(args[0]); // payload is first arg
    } as typeof originalMethod;

    RabbitSubscribe(config)(target, propertyKey, descriptor);

    return descriptor;
  };
}
