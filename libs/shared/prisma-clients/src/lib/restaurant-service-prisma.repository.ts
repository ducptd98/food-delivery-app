import { PrismaClient } from '@food-delivery-app/prisma-restaurant-service';
import { TPrismaTransaction } from '@food-delivery-app/types';

export class RestaurantServicePrismaRepository {
  private static INSTANCE: RestaurantServicePrismaRepository;
  protected prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public static getPrismaClient(client?: TPrismaTransaction): PrismaClient {
    if (client) {
      return client as PrismaClient;
    }
    if (!RestaurantServicePrismaRepository.INSTANCE) {
      RestaurantServicePrismaRepository.INSTANCE =
        new RestaurantServicePrismaRepository();
    }

    return RestaurantServicePrismaRepository.INSTANCE.prisma;
  }
}
