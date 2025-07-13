import { TransactionModule } from '@food-delivery-app/common';
import { Module } from '@nestjs/common';
import { AuthMessagingModule } from '@food-delivery-app/auth-messaging';
import { AuthService } from './services/auth.service';
import { JwtService } from './services/jwt.service';

@Module({
  imports: [TransactionModule, AuthMessagingModule],
  providers: [AuthService, JwtService],
  exports: [AuthService],
})
export class AuthDataAccessModule {}
