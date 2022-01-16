import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';

const saltOrRounds = 10;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8090);
}
bootstrap();
