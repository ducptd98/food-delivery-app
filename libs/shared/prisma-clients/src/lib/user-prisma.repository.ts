import { PrismaClient } from '@food-delivery-app/prisma-user-service';
import { TPrismaTransaction } from '@food-delivery-app/types';

export class UserPrismaRepository {
  private static INSTANCE: UserPrismaRepository;
  protected prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public static getPrismaClient(client?: TPrismaTransaction): PrismaClient {
    if (client) {
      return client as PrismaClient;
    }
    if (!UserPrismaRepository.INSTANCE) {
      UserPrismaRepository.INSTANCE = new UserPrismaRepository();
    }

    return UserPrismaRepository.INSTANCE.prisma;
  }
}
