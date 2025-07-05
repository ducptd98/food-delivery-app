import { UserPrismaRepository } from '@food-delivery-app/prisma-client';
import { TPrismaTransaction } from '@food-delivery-app/types';
import { InternalServerError } from '@food-delivery-app/utils';
import { Injectable } from '@nestjs/common';

type ClientType = 'user' | 'order' | 'product';

@Injectable({})
export class TransactionManagerService {
  public async performActionInTransaction(
    type: ClientType,
    handle: (prisma: TPrismaTransaction) => Promise<any>
  ): Promise<void> {
    const client = this.getPrismaClient(type);
    if (!client) {
      throw new InternalServerError(`Prisma client for type ${type} not found`);
    }

    const promises: Promise<any>[] = [];

    await client.$transaction(async (c: TPrismaTransaction) => {
      c.queues = [];

      await handle(c);

      if (c.queues?.length > 0) {
        c.queues.forEach((queue) => {
          promises.push(queue.process());
        });
      }

      await Promise.all(promises);
    });
  }

  private getPrismaClient(type: ClientType) {
    if (type === 'user') {
      return UserPrismaRepository.getPrismaClient();
    }

    return null;
  }
}
