import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, firstValueFrom, Observable, tap, throwError, timeout } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class BoissonService {

  constructor(private http:HttpClient) { }

  public getComplements(): Observable<any>{
      return this.http.get<any>(environment.COMPLEMENTS_URL).pipe(  catchError(this.handleError)  );
  }

  async getProducts(): Promise<any> 
  {
    return await firstValueFrom(
      this.http.get<any>(environment.COMPLEMENTS_URL).pipe(
        timeout(10000),
        catchError(this.handleError)
      )
    );
  }

  private handleError(error: HttpErrorResponse) 
  {
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
