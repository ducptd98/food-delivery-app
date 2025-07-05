import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../repositories/user.repository';
import { User, Prisma } from '@food-delivery-app/prisma-user-service';
import { TPrismaTransaction } from '@food-delivery-app/types';

@Injectable()
export class UserService {
  constructor(private readonly usersRepository: UsersRepository) {}

  public async findAll(): Promise<User[]> {
    return this.usersRepository.findAll();
  }

  public async createOne(
    data: Prisma.UserCreateInput,
    client?: TPrismaTransaction
  ): Promise<User> {
    return this.usersRepository.createOne(data, client);
  }

  public async findByEmail(email: string): Promise<User> {
    return this.usersRepository.findByEmail(email);
  }

  public async findById(id: number): Promise<User> {
    return this.usersRepository.findById(id);
  }
}
