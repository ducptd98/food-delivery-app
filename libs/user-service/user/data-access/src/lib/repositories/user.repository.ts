import { UserPrismaRepository } from '@food-delivery-app/prisma-client';
import { User, Prisma } from '@food-delivery-app/prisma-user-service';
import { TPrismaTransaction } from '@food-delivery-app/types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  constructor() {}

  public async findAll(): Promise<User[]> {
    return UserPrismaRepository.getPrismaClient().user.findMany();
  }

  public async createOne(
    data: Prisma.UserCreateInput,
    client?: TPrismaTransaction
  ): Promise<User> {
    return UserPrismaRepository.getPrismaClient(client).user.create({ data });
  }

  public async findByEmail(email: string): Promise<User> {
    return UserPrismaRepository.getPrismaClient().user.findUnique({
      where: { email },
    }) as Promise<User>;
  }

  public async findById(id: number): Promise<User> {
    return UserPrismaRepository.getPrismaClient().user.findUnique({
      where: { id },
    }) as Promise<User>;
  }
}
