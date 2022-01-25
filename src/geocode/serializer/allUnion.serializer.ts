import { Exclude, plainToClass, Type} from 'class-transformer';
import { Unions } from '../../entity/repository/union.entity';
import { BaseSerializer } from '../../app.serializer';

class Union {
    name:string;
    bn_name:string;
    url:string;
	id: number;

}
class Upazila{
    
    name:string;
    @Exclude()
    bn_name:string;

    id:number;
    
    @Exclude()
    url:string;
    
    @Type(()=>Upazila)
    districts:Upazila[]
}

export class AllUnionSerializer extends BaseSerializer {
	constructor(statusCode: number, message: string, data: Unions[], errors: any, optional?: Record<string, unknown>) {
		super(statusCode, message, plainToClass(Upazila,data), errors);
	}
}