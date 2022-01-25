import { Injectable, NestInterceptor, ExecutionContext, CallHandler, SetMetadata, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => {
        const res = context.switchToHttp().getResponse();
        res.status(data.statusCode);
        return data;
      })
    );
  }
}
