import { AuthFeatureModule } from '@food-delivery-app/auth-feature';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AuthFeatureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
