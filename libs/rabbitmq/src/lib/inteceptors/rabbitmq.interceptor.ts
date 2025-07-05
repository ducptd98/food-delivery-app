import { Logger } from '@nestjs/common';

export function RabbitHandler<TInput = any, TOutput = any>(
  handler: (data: TInput) => Promise<TOutput>
): (
  data: TInput
) => Promise<{ success: boolean; data?: TOutput; error?: string }> {
  return async (data: TInput) => {
    const logger = new Logger('RabbitInterceptor');

    try {
      const result = await handler(data);
      return { success: true, data: result };
    } catch (err: any) {
      logger.error(err.message);
      return { success: false, error: err.message || 'Internal error' };
    }
  };
}
