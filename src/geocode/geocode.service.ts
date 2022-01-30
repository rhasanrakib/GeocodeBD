/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { EntityService } from '../entity/entity.service';
import { Districts } from '../entity/repository/district.entity';
import { Divisions } from '../entity/repository/division.entity';
import { Unions } from '../entity/repository/union.entity';
import { Upazilas } from '../entity/repository/upazila.entity';


@Injectable()
export class GeocodeService {
  constructor(
    private readonly entityService:EntityService
  ){}


  async getAllDivision():Promise<Divisions[]> {
    
    return await this.entityService.divisionRepo.find();
  }
  async getAllDistrictByDivision(divisionName:string):Promise<Districts[]>{
    return await this.entityService.divisionRepo.find({relations:['districts'],where:{name:divisionName}}) as unknown as Districts[];
  }

  async getAllUpazilaByDistrict(districtName:string):Promise<Upazilas[]>{
    return await this.entityService.districtRepo.find({relations:['upazilas'],where:{name:districtName}}) as unknown as Upazilas[];
  }
  async getAllUnionByUpazila(upazilaName:string):Promise<Unions[]>{
    return await this.entityService.upazilaRepo.find({relations:['unions'],where:{name:upazilaName}}) as unknown as Unions[];
  }

  async getAllDistrictByDivisionId(divisionId:number):Promise<Districts[]>{
    return await this.entityService.divisionRepo.find({relations:['districts'],where:{id:divisionId}}) as unknown as Districts[];
  }

  async getAllUpazilaByDistrictId(districtId:number):Promise<Upazilas[]>{
    return await this.entityService.districtRepo.find({relations:['upazilas'],where:{id:districtId}}) as unknown as Upazilas[];
  }
  async getAllUnionByUpazilaId(upazilaId:number):Promise<Unions[]>{
    return await this.entityService.upazilaRepo.find({relations:['unions'],where:{id:upazilaId}}) as unknown as Unions[];
  }

  
}
