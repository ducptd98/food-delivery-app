import { TMessageQueueResponse } from '@food-delivery-app/types';
import { Logger } from '@nestjs/common';

export function RabbitHandler<TInput = any, TOutput = any>(
  handler: (data: TInput) => Promise<TOutput>
): (data: TInput) => Promise<TMessageQueueResponse<TOutput>> {
  return async (data: TInput) => {
    const logger = new Logger('RabbitInterceptor');

    try {
      const result = await handler(data);
      return { success: true, data: result };
    } catch (err: any) {
      logger.error(err.message);
      return {
        success: false,
        data: null,
        error: err.message || 'Internal error',
      } satisfies TMessageQueueResponse<TOutput>;
    }
  };
}
