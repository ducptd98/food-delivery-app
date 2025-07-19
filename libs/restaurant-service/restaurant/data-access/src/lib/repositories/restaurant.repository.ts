import { RestaurantServicePrismaRepository } from '@food-delivery-app/prisma-client';
import {
  Prisma,
  Restaurant,
} from '@food-delivery-app/prisma-restaurant-service';
import { TPrismaTransaction } from '@food-delivery-app/types';
import { Injectable } from '@nestjs/common';
@Injectable()
export class RestaurantRepository {
  public async createOne(
    data: Prisma.RestaurantCreateInput,
    client?: TPrismaTransaction
  ): Promise<Restaurant> {
    return RestaurantServicePrismaRepository.getPrismaClient(
      client
    ).restaurant.create({
      data,
    });
  }

  public async updateOne(
    id: number,
    data: Prisma.RestaurantUpdateInput,
    client?: TPrismaTransaction
  ): Promise<Restaurant> {
    return RestaurantServicePrismaRepository.getPrismaClient(
      client
    ).restaurant.update({
      where: { id },
      data,
    });
  }

  public async findById(id: number): Promise<Restaurant | null> {
    return RestaurantServicePrismaRepository.getPrismaClient().restaurant.findUnique(
      {
        where: { id },
      }
    );
  }

  public async deleteById(
    id: number,
    client?: TPrismaTransaction
  ): Promise<Restaurant> {
    return RestaurantServicePrismaRepository.getPrismaClient(
      client
    ).restaurant.delete({
      where: { id },
    });
  }
}
