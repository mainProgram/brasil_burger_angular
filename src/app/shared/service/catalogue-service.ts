import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError} from "rxjs/operators";
import { environment } from "src/environments/environment";
import { ICatalogue, IComplement, IProduit } from "../interface/interfaces";

@Injectable({
    providedIn: "root"
})

export class CatalogueService
{
    constructor(private http:HttpClient){}

    public getProduits(): Observable<ICatalogue>
    {
        return this.http.get<ICatalogue>(environment.CATALOGUE_URL).pipe(
            // map(p => p?.burgers),
            // tap(produits => console.log(produits)),
            catchError(this.handleError)
        );
    }

    public getComplements(): Observable<IComplement>
    {
        return this.http.get<IComplement>(environment.COMPLEMENTS_URL).pipe(
            // tap(produits => console.log(produits)),
            catchError(this.handleError)
        );
    }

    public getById(id:number, tab: IProduit[]){  return tab.find(param => param.id == id)}

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