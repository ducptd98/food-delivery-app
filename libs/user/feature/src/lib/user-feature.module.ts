import { UserDataAccessModule } from '@food-delivery-app/user-data-access';
import { UserMessagingModule } from '@food-delivery-app/user-messaging';
import { Module } from '@nestjs/common';

@Module({
  imports: [UserDataAccessModule, UserMessagingModule],
})
export class UserFeatureModule {}
