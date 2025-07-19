import { UserServicePrismaRepository } from '@food-delivery-app/prisma-client';
import { User, Prisma } from '@food-delivery-app/prisma-user-service';
import { TPrismaTransaction } from '@food-delivery-app/types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  public async findAll(): Promise<User[]> {
    return UserServicePrismaRepository.getPrismaClient().user.findMany();
  }

  public async createOne(
    data: Prisma.UserCreateInput,
    client?: TPrismaTransaction
  ): Promise<User> {
    return UserServicePrismaRepository.getPrismaClient(client).user.create({
      data,
    });
  }

  public async findByEmail(email: string): Promise<User> {
    return UserServicePrismaRepository.getPrismaClient().user.findUnique({
      where: { email },
    }) as Promise<User>;
  }

  public async findById(id: number): Promise<User> {
    return UserServicePrismaRepository.getPrismaClient().user.findUnique({
      where: { id },
    }) as Promise<User>;
  }
}
