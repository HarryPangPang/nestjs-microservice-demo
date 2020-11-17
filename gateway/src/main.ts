import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(
    app.get(Logger)
  )
  app.enableCors({
    origin: '*'
  })
  await app.listen(8083);
}
bootstrap();
