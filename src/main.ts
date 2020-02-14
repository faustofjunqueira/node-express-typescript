process.env["NODE_CONFIG_DIR"] = __dirname + "/../config/";
import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './core/validation.pipe';
import config = require('config');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(config.get('http.server.port'));
}
bootstrap();
