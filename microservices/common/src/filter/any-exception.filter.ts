import { Catch, RpcExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { RpcException } from '@nestjs/microservices';
import { PinoLogger } from 'nestjs-pino';

@Catch(Error)
export class ExceptionFilter implements RpcExceptionFilter<Error> {
constructor(private readonly logger: PinoLogger){
    logger.setContext('CommonException')
}
  catch(error: Error, host: ArgumentsHost): Observable<any> {
    console.log('exception.getError()')
    console.log(error)
    return
  }
}

// @Catch(RpcException)
// export class ExceptionFilter implements RpcExceptionFilter<RpcException> {
// constructor(private readonly logger: PinoLogger){
//     logger.setContext('CommonException')
// }
//   catch(exception: RpcException, host: ArgumentsHost): Observable<any> {
//     console.log('exception.getError()')
//       console.log(exception.getError())
//     this.logger.error('CommonException',exception.getError())
//     return throwError(exception.getError());
//   }
// }