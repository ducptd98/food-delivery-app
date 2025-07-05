import { Module } from '@nestjs/common';
import { UserConsumer } from './consumers/user.consumer';
import { UsersRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';

@Module({
  providers: [UserService, UserConsumer, UsersRepository],
  exports: [UserService, UsersRepository],
})
export class UserDataAccessModule {}
