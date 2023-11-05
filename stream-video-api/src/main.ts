import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

function logMemoryUsage()
{
  const usedMemory = process.memoryUsage();
  console.log('Memory Usage:', usedMemory);
}

async function bootstrap()
{
  const app = await NestFactory.create(AppModule);

  setInterval(() =>
  {
    logMemoryUsage();
  }, 5000);

  app.use('/static', express.static('public'));

  await app.listen(3000);
}
bootstrap();
