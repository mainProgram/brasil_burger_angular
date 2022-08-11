import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  constructor(private http:HttpClient){}

  // private readonly ZONES_URL = "api/zones.json";

  public getAllZones(): Observable<any>
  {
      return this.http.get<any>(environment.ZONES_URL).pipe(
          catchError(this.handleError)
      );
  }

  public getZonesDontCommandeEtatTermine() {
    return this.http.get(environment.ZONE_COMMANDES_ETAT_TERMINE)
  }
  public getCommandesTermineesParZones(id:number)
  {    
    return this.http.get(environment.COMMANDE_FILTERED+id)
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
