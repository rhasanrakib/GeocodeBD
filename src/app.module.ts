import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntityModule } from './entity/entity.module';
import { GeocodeModule } from './geocode/geocode.module';

@Module({
  imports: [ConfigModule.forRoot(
    {
      isGlobal: true,
    }
  ), TypeOrmModule.forRoot({
    "type": "mysql",
    "host": process.env.DB_HOST,
    "port": 3306,
    "username": process.env.DB_USER_NAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "synchronize": false
  }), EntityModule, GeocodeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
