import { Exclude, plainToClass, Type} from 'class-transformer';
import { Districts } from '../../entity/repository/district.entity';
import { BaseSerializer } from '../../app.serializer';

class District {
    name:string;
    bn_name:string;
    url:string;
	id: number;
    @Exclude()
    lat:string;
    @Exclude()
    lon:string;
}
class Divisions{
    
    name:string;
    @Exclude()
    bn_name:string;
    
    id:number;
    @Exclude()
    url:string;

    @Type(()=>District)
    districts:District[]
}

export class AllDistrictSerializer extends BaseSerializer {
	constructor(statusCode: number, message: string, data: Districts[], errors: any, optional?: Record<string, unknown>) {
		super(statusCode, message, plainToClass(Divisions,data), errors);
	}
}