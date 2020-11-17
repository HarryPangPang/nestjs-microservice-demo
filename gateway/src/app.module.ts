import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'
import { LoggerModule } from 'nestjs-pino';
import { CommonModule } from './common/common.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './filter/any-exception.filter';

@Module({
  imports: [
  
  CommonModule,
    ConfigModule.forRoot(),
    LoggerModule.forRoot({
      pinoHttp: {
        safe: true,
        prettyPrint: true
      }
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter
    }
  ],
})
export class AppModule {}
