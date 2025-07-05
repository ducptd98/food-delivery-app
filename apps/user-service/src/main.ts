/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { API_VERSION, AppExceptionFilter } from '@food-delivery-app/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = `api/${API_VERSION}`;
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalFilters(new AppExceptionFilter());

  app.useGlobalPipes(
    new ValidationPipe({
      forbidUnknownValues: true,
      whitelist: true,
    })
  );
  app.enableCors();
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
