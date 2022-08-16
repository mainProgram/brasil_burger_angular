import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, firstValueFrom, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../interface/interfaces';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient, private tokenService: TokenService) { }

  public async getAllUsers():Promise<any>  {  return await firstValueFrom(this.http.get<any>(environment.USERS_URL).pipe( catchError(this.handleError)));}
  // public getAllUsers(): Observable<IUser[]> {  return this.http.get<IUser[]>(environment.USERS_URL).pipe( catchError(this.handleError))}

  public getUsername() {  return this.tokenService.getUser(this.tokenService.getToken()).username  }

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

  async getClientId()
  {
    let username = this.getUsername()

    let users = await this.getAllUsers()
      
    let client = users.find(el => el.email == username);
              
    return await client.id
  }
  
}
