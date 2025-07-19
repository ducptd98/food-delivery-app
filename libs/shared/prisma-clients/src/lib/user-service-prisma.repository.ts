import { PrismaClient } from '@food-delivery-app/prisma-user-service';
import { TPrismaTransaction } from '@food-delivery-app/types';

export class UserServicePrismaRepository {
  private static INSTANCE: UserServicePrismaRepository;
  protected prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public static getPrismaClient(client?: TPrismaTransaction): PrismaClient {
    if (client) {
      return client as PrismaClient;
    }
    if (!UserServicePrismaRepository.INSTANCE) {
      UserServicePrismaRepository.INSTANCE = new UserServicePrismaRepository();
    }

    return UserServicePrismaRepository.INSTANCE.prisma;
  }
}
