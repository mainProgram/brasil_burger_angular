import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../interface/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {

  constructor(private http:HttpClient) { }

  public getLivreurs():Observable<IUser[]>{  return this.http.get<IUser[]>(environment.LIVREURS_URL).pipe( catchError(this.handleError)) }

  public getLivreursDispo(){  return this.http.get(environment.LIVREURS_URL+"?isDisponible=1").pipe( catchError(this.handleError)) }

  public creer(body){  return this.http.post(environment.LIVRAISONS_URL, body).pipe( catchError(this.handleError)) }

  public getAllLivraisons(){  return this.http.get(environment.LIVRAISONS_URL).pipe( catchError(this.handleError)) }

  public getDetailLivraison(id: number){  return this.http.get(environment.LIVRAISONS_URL+"/"+id).pipe( catchError(this.handleError)) }

  public getDetailLivreurs(id: number):Observable<IUser>{  return this.http.get<IUser>(environment.LIVREURS_URL+"/"+id).pipe( catchError(this.handleError)) }
  
  public setLivreurDisponible(id: number):Observable<IUser>{  return this.http.put<IUser>(environment.LIVREURS_URL+"/"+id, { "isDisponible" : true}).pipe( catchError(this.handleError)) }

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
