import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICredential, IToken, IUser } from '../interface/interfaces';
import { catchError, firstValueFrom, throwError } from 'rxjs';
import { TokenService } from './token.service';
import { Router } from '@angular/router';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: IUser

  constructor(private http:HttpClient, private tokenService: TokenService, private retour:Router, private userServiceService: UserServiceService) {   }

  public hasRole(role: string){ return this.user.roles.includes(role as never); }

  public async login(body : ICredential)
  {
    return await firstValueFrom(
      this.http.post<IToken>(environment.LOGIN_URL, body).pipe(
        catchError( error => {            
          if(error.status == 401)
            console.log("Login et/ou mot de passe incorrect(s)!")
          return throwError(() => new Error("Login et/ou mot de passe incorrect(s)!"))
        })
      )
    ).then((data) => 
    {
      this.tokenService.saveToken(data.token)  ;  
      this.user = (this.tokenService.getUser(data.token));
      this.userServiceService.getClientId().then(m =>
        this.tokenService.saveId(m)        
      );
            
      (this.hasRole("ROLE_CLIENT")) ?  this.retour.navigate(["/catalogue"]) : this.retour.navigate(["/admin/commandes"])
    })
  }

  public inscription(body: IUser)
  {
    return this.http.post<IUser>(environment.INSCRIPTION_URL, body).subscribe(
    {
      next: data => { 
        console.log(data);
        this.retour.navigate(["/auth/connexion"])
      },
      error: () => catchError(this.handleError),
    });
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
