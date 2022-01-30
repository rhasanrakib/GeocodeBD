import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as csurf from 'csurf';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT;
  //app.use(csurf());
  app.enableCors({
    origin: '*',

    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  });
  await app.listen(PORT);
  console.log('Geocode bd started at', PORT);
}
bootstrap();
