import { Module } from '@nestjs/common';
import { UsersRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';

@Module({
  providers: [UserService, UsersRepository],
  exports: [UserService, UsersRepository],
})
export class UserDataAccessModule {}
