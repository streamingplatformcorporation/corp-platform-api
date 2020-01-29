import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {

    cors: {

      origin: [

        'http://localhost:4444', // local user interface

      ]

    }

  });
  await app.listen(3000);
}
bootstrap();
