import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, map, pluck, tap } from "rxjs/operators";
import { ICatalogue } from "../interface/catalogue";
import { IProduit } from "../interface/produit";

@Injectable({
    providedIn: "root"
})

export class CatalogueService
{
    private readonly CATALOGUE_URL = "api/produits.json";
    // private readonly CATALOGUE_URL = "https://127.0.0.1:8000/api/catalogue";

    constructor(private http:HttpClient){}

    private _orderCount = new BehaviorSubject<any>({
      cartTotal : 0
    });

    private _orderCount$ = this._orderCount.asObservable();

    getOrderCount(): Observable<any>
    {
      return this._orderCount$;
    }

    setOrderCount(latestValue: any)
    {
      return this._orderCount.next(latestValue);
    }


    public addToCart(produit: IProduit)
    {
        
    }

    public getProduits(): Observable<ICatalogue>
    {
        return this.http.get<ICatalogue>(this.CATALOGUE_URL).pipe(
            // map(p => p?.burgers),
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