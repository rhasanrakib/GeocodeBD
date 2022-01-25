import { Exclude, plainToClass, Type} from 'class-transformer';
import { Upazilas } from '../../entity/repository/upazila.entity';
import { BaseSerializer } from '../../app.serializer';

class Upazila {
    name:string;
    bn_name:string;
    url:string;
	id: number;

}
class District{
    
    name:string;
    @Exclude()
    bn_name:string;
    
    id:number;
    @Exclude()
    url:string;
    @Exclude()
    lat:string;
    @Exclude()
    lon:string;
    @Type(()=>Upazila)
    districts:Upazila[]
}

export class AllUpazilaSerializer extends BaseSerializer {
	constructor(statusCode: number, message: string, data: Upazilas[], errors: any, optional?: Record<string, unknown>) {
		super(statusCode, message, plainToClass(District,data), errors);
	}
}