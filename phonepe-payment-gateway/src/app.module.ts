import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhonePeModule } from './phonepe/phonepe.module';
import { ConfigModule } from '@nestjs/config';
// import { ConfigModule } from './config/config.module';


@Module({
  imports: [ConfigModule.forRoot(), PhonePeModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
