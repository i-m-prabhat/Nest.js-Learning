// src/phonepe/phonepe.module.ts
import { Module } from '@nestjs/common';
import { PhonePeController } from './phonepe.controller';
import { PhonePeHelperService } from './phonepe-helper.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [PhonePeController],
  providers: [PhonePeHelperService],
})
export class PhonePeModule { }
