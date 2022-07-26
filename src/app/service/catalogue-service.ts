import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map, pluck, tap } from "rxjs/operators";
import { ICatalogue } from "../interface/catalogue";

@Injectable({
    providedIn: "root"
})

export class CatalogueService
{
    private readonly CATALOGUE_URL = "api/produits.json";

    constructor(private http:HttpClient){}

    public getProduits(): Observable<any>
    {
        return this.http.get<any>(this.CATALOGUE_URL).pipe(
            // map(p => p?.burgers),
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