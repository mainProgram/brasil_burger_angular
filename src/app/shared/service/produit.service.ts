import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduit } from '../interface/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) { }

  public getAllProducts(){  return this.http.get<any>(environment.PRODUITS_URL).pipe( catchError(this.handleError)) }

  public getOneProduct(id: number){  return this.http.get<IProduit>(environment.PRODUITS_URL+"/"+id).pipe( catchError(this.handleError)) }

  public ajouterProduit(produit: IProduit){  
    let url = ""
    if(produit.categorie == "menu")
      url = environment.MENUS_URL
    else if(produit.categorie == "burger")
      url = environment.BURGERS_URL
    else if(produit.categorie == "frite")
      url = environment.FRITES_URL
    else if(produit.categorie == "boisson")
      url = environment.BOISSONS_URL

    return this.http.post<IProduit>(url, produit).pipe( catchError(this.handleError)) 
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
