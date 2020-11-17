import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';

@Catch(Error)
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly logger: PinoLogger){
    logger.setContext('exception')
  }
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    this.logger.info('内部发生错误', exception)
    console.log(exception.message)
    response.status(status).json({
      statusCode: status,
      message: exception.message,
      data: null
    });
  }
}
