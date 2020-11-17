import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'
import { LoggerModule } from 'nestjs-pino';
import { SequelizeModule } from '@nestjs/sequelize';
import { APP_FILTER } from '@nestjs/core';
import { ExceptionFilter } from './filter/any-exception.filter';

@Module({
  imports: [
  
SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'gmt',
      models: [],
    }),
    ConfigModule.forRoot(),
    LoggerModule.forRoot({
      pinoHttp: {
        safe: true,
        prettyPrint: process.env.NODE_ENV === 'development'
      }
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide:  APP_FILTER,
      useClass: ExceptionFilter
    }
  ],
})
export class AppModule {}
