import { PinoLogger } from 'nestjs-pino'
import { ClientGrpc, Client } from '@nestjs/microservices'
import { Controller, Get, HttpStatus, Delete, Query, Body, Param, Inject, OnModuleInit, NotFoundException, Header, HttpException } from '@nestjs/common'
import { CommonMicroServiceOptions } from './common.micro.service.options'
import { CommonSerivce } from './common.interface'


@Controller('test')
export class CommonController implements OnModuleInit {
  constructor(
      private readonly logger: PinoLogger
    ) {
    logger.setContext(CommonController.name)
  }

  @Client(CommonMicroServiceOptions)
  private readonly commonMicroServiceClient: ClientGrpc

  private commonService: CommonSerivce


  onModuleInit() {
    this.commonService = this.commonMicroServiceClient.getService<CommonSerivce>('CommonSerivce')
  }

  @Get()
  async getHello(): Promise<string> {
    return await this.commonService.test({}).toPromise()
  }

}
