import { UserFeatureModule } from '@food-delivery-app/user-feature';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [UserFeatureModule],
  controllers: [AppController],
})
export class AppModule {}
