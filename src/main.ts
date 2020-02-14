import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ skipMissingProperties: true }));

  const options = new DocumentBuilder()
    .setTitle('Advertisers example')
    .setDescription('The advertisers API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/swagger-ui.html', app, document);

  await app.listen(8080);
}
bootstrap();
