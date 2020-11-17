import { Module } from '@nestjs/common'
import { LoggerModule } from 'nestjs-pino'
import { CommonController } from './common.controller'
@Module({
  imports: [

    LoggerModule.forRoot()
  ],
  controllers: [CommonController]
})
export class CommonModule {}
