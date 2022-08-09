import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient, private retour:Router) { }

  public saveOrder(body)
  {
    this.http.post<any>(environment.COMMANDE_URL, body).subscribe(
      {
        next: data => {
          this.retour.navigate(["/commandes/"+data.id])
        },
        // error: error =>{
        //   alert("Y'a erreur")
        // }
      }
    )
  }

  public getCommandesById(id)
  {
    let COMMANDE_CLIENT_URL = "https://127.0.0.1:8000/api/clients/"+ id +"/commandes"

    return this.http.get<any>(COMMANDE_CLIENT_URL)
  }

  public getById(id:number)
  {  
    return this.http.get<any>(environment.COMMANDE_URL+"/"+id)
  }

  public annulerCommande(id)
  {
    return this.http.put<any>(environment.COMMANDE_URL+"/"+id, {
      "etat": "annule"
    })
  }

  public formatEtat(etat)
  {
    let etatFormate
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

}


