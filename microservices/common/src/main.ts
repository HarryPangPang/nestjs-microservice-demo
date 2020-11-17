import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices'
import { join } from 'path'

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: `127.0.0.1:8084`,
      package: 'common',
      protoPath: join(__dirname, './proto/common.proto'),
      loader: {
        enums: String,
        objects: true,
        arrays: true
      }
    }
  });
  // app.listen(() => console.log('Common microservice is listening'));
  return app.listenAsync()
}
bootstrap();
