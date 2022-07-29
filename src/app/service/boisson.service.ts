import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoissonService {

  constructor(private http:HttpClient) { }

  public BOISSON_URL = "api/boissons.json";
  // public BOISSON_URL = "https://127.0.0.1:8000/api/taille_boissons";

  public getBoissons(): Observable<any>
    {
        return this.http.get<any>(this.BOISSON_URL).pipe(
            tap(produits => console.log(produits)),
            catchError(this.handleError)
        );
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
