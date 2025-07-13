import { AuthDataAccessModule } from '@food-delivery-app/auth-data-access';
import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [AuthDataAccessModule],
  controllers: [AuthController],
})
export class AuthFeatureModule {}
