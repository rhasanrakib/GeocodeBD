import { Exclude, plainToClass, Type} from 'class-transformer';
import { Divisions } from '../../entity/repository/division.entity';
import { BaseSerializer } from '../../app.serializer';

class Division {
    name:string;
    bn_name:string;
    url:string;
	id: number;
}

export class AllDivisionSerializer extends BaseSerializer {
	constructor(statusCode: number, message: string, data: Divisions[], errors: any, optional?: Record<string, unknown>) {
		super(statusCode, message, plainToClass(Division,data), errors);
	}
}