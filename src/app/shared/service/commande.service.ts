import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient, private retour:Router) { }

  public saveOrder(body)
  {
    this.http.post<any>(environment.COMMANDE_URL, body).subscribe({
        next: data => {  this.retour.navigate(["/commandes/"+data.id]) },
        error: error =>{  alert("Y'a erreur")}
    })
  }

  public getCommandesById(id: number)
  {
    let COMMANDE_CLIENT_URL = "https://127.0.0.1:8000/api/clients/"+ id +"/commandes"
    return this.http.get<any>(COMMANDE_CLIENT_URL).pipe( catchError(this.handleError))
  }

  public getCommandesByZone(zone: string) {  return this.http.get<any>(environment.COMMANDE_URL+"?zone.nom="+zone).pipe( catchError(this.handleError)) }

  public getById(id:number){  return this.http.get<any>(environment.COMMANDE_URL+"/"+id).pipe( catchError(this.handleError)) }

  public traiterCommande(id:number, etat:string){  return this.http.put<any>(environment.COMMANDE_URL+"/"+id, {  "etat": etat  }).pipe( catchError(this.handleError)) }

  public getCommandes(){  return this.http.get<any>(environment.COMMANDE_URL).pipe( catchError(this.handleError))  }

  public formatEtat(etat: string)
  {
    let etatFormate : string
    if(etat == "en attente")
      etatFormate = "En attente"
    else if(etat == "termine")
      etatFormate = "Livré"
    else if(etat == "valide")
      etatFormate = "En cours"
    else if(etat == "annule")
      etatFormate = "Annulé"
    else if(etat == "livraison")    
      etatFormate = "En cours de livraison"
    return etatFormate
  }

  getColour(etat: string) : null | string
  {
    if(etat == "en attente")
        return "orange"
    else if(etat == "termine")
        return "green"
    else if(etat == "valide")
        return "blue"
    else if(etat == "annule")
        return "red";
    else if(etat == "livraison")    
        return "blue"
    return null
  }

  getIcon(etat: string) : null | string
  {
    if(etat == "en attente")
        return "pending"
    else if(etat == "termine")
        return "done"
    else if(etat == "valide")
        return "schedule"
    else if(etat == "annule")
        return "close";
    else if(etat == "livraison")    
        return "local_shipping"
    return null
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


