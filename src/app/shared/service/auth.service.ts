import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICredential, IToken, IUser } from '../interface/interfaces';
import { catchError, firstValueFrom, throwError } from 'rxjs';
import { TokenService } from './token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: IUser

  constructor(private http:HttpClient, private tokenService: TokenService, private retour:Router) {   }

  public hasRole(role: string){ return this.user.roles.includes(role as never); }

  // public login(body : ICredential) 
  // {  
  //   return this.http.post<IToken>(environment.LOGIN_URL, body).subscribe(
  //   {
  //     next: data => 
  //     {  
  //       this.tokenService.saveToken(data.token)  ;  
  //     },
  //     error: (e) => catchError(this.handleError),
  //   });
  // }

  public async login(body : ICredential)
  {
    return await firstValueFrom(
      this.http.post<IToken>(environment.LOGIN_URL, body).pipe(
        catchError(this.handleError)
      )
    ).then((data) => 
    {
      this.tokenService.saveToken(data.token)  ;  
      this.user = (this.tokenService.getUser(data.token));
      console.log(this.user);
            
      (this.hasRole("ROLE_CLIENT")) ?  this.retour.navigate(["/catalogue"]) : this.retour.navigate(["/admin/commandes"])
    })
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
