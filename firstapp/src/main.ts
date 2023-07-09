import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';

async function bootstrap()
{
  const app = await NestFactory.create(RootModule);
  await app.listen(5000);
}
bootstrap();
