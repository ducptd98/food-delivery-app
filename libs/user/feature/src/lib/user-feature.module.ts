import { UserDataAccessModule } from '@food-delivery-app/user-data-access';
import { Module } from '@nestjs/common';

@Module({
  imports: [UserDataAccessModule],
})
export class UserFeatureModule {}
