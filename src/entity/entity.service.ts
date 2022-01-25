import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Districts } from './repository/district.entity';
import { Divisions } from './repository/division.entity';
import { Unions } from './repository/union.entity';
import { Upazilas } from './repository/upazila.entity';

@Injectable()
export class EntityService {
    constructor(
        @InjectRepository(Divisions)
        public readonly divisionRepo:Repository<Divisions>,
        @InjectRepository(Districts)
        public readonly districtRepo:Repository<Districts>,
        @InjectRepository(Upazilas)
        public readonly upazilaRepo:Repository<Upazilas>,
        @InjectRepository(Unions)
        public readonly unionRepo:Repository<Unions>,
        
    ){}
}
