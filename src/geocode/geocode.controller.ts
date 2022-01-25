import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { GeocodeService } from './geocode.service';
import { AllDivisionSerializer } from './serializer/allDivision.serializer';
import { AllDistrictSerializer } from './serializer/allDistricts.serializer';
import { AllUpazilaSerializer } from './serializer/allUpazilas.serializer';
import { AllUnionSerializer } from './serializer/allUnion.serializer';

@Controller('geocode')
export class GeocodeController {
  constructor(private readonly geocodeService: GeocodeService) {}

  @Get('all-division')
  async getAllDivision() {
    const data = await this.geocodeService.getAllDivision()
    return new AllDivisionSerializer(HttpStatus.OK,'success',data,[]);
  }
  @Get('all-districts-by-division')
  async getAllDistrictByDivision(@Query('division') divisionName:string) {
    const data = await this.geocodeService.getAllDistrictByDivision(divisionName)
    return new AllDistrictSerializer(HttpStatus.OK,'success',data,[]);
  }

  @Get('all-upazilas-by-district')
  async getAllUpazilaByDistrict(@Query('district') districtName:string) {
    const data = await this.geocodeService.getAllUpazilaByDistrict(districtName)
    return new AllUpazilaSerializer(HttpStatus.OK,'success',data,[]);
  }

  @Get('all-unions-by-upazila')
  async getAllUnionByUpazila(@Query('upazila') upazilaName:string) {
    const data = await this.geocodeService.getAllUnionByUpazila(upazilaName)
    return new AllUnionSerializer(HttpStatus.OK,'success',data,[]);
  }

}
