import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { TokenService } from '../shared/service/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.tokenService.getToken()

    if(token !== null)
    {
      let clone = request.clone(
       { headers: request.headers.set('Authorization', 'bearer '+token)}
      )
      return next.handle(clone).pipe( 
        catchError( error => {            
            if(error.status == 401)
                this.tokenService.clearTokenExpired();
            
            return throwError(() => new Error("Session expirée !"))
        })
      );
    }
    
    return next.handle(request);
  }
}

export const TokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
}