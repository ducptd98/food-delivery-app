import { TransactionModule } from '@food-delivery-app/common';
import { UserDataAccessModule } from '@food-delivery-app/user-data-access';
import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { JwtService } from './services/jwt.service';

@Module({
  imports: [UserDataAccessModule, TransactionModule],
  providers: [AuthService, JwtService],
  exports: [],
})
export class AuthDataAccessModule {}
