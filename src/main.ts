import { INestApplication } from '@nestjs/common';
process.env["NODE_CONFIG_DIR"] = __dirname + "/../config/";
import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './core/validation.pipe';
import config = require('config');
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  configureSwagger(app);
  await app.listen(config.get('http.server.port'));
}

/**
 * Configure Swagger
 *
 * @param {INestApplication} app
 */
function configureSwagger(app: INestApplication) {
  if (config.has('swagger')) {
    let documentBuilder = new DocumentBuilder();
    if (config.has('swagger.title'))
      documentBuilder = documentBuilder.setTitle(config.get('swagger.title'));
    if (config.has('swagger.description'))
      documentBuilder = documentBuilder.setDescription(config.get('swagger.description'));
    if (config.has('swagger.version'))
      documentBuilder = documentBuilder.setVersion(config.get('swagger.version'));
    if (config.has('swagger.contact'))
      documentBuilder = documentBuilder.setContact(config.get('swagger.contact.name'), config.get('swagger.contact.url'), config.get('swagger.contact.email'));
    if (config.has('swagger.termsOfService'))
      documentBuilder = documentBuilder.setTermsOfService(config.get('swagger.termsOfService'));
    if (config.has('swagger.license'))
      documentBuilder = documentBuilder.setLicense(config.get('swagger.license.name'), config.get('swagger.license.url'));

    const options = documentBuilder.build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup(config.get('swagger.route'), app, document);
  }
}

bootstrap();
