import { Global, Module } from '@nestjs/common';
import { EntityService } from './entity.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Divisions } from './repository/division.entity';
import { Districts } from './repository/district.entity';
import { Upazilas } from './repository/upazila.entity';
import { Unions } from './repository/union.entity';

@Global()
@Module({
  imports:[TypeOrmModule.forFeature([Divisions,Districts,Upazilas,Unions])],
  providers: [EntityService],
  exports:[TypeOrmModule.forFeature([Divisions,Districts,Upazilas,Unions]),EntityService],
})
export class EntityModule {}
