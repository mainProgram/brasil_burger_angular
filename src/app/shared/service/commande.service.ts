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

  public getCommandesById(id: number)
  {
    let COMMANDE_CLIENT_URL = "https://127.0.0.1:8000/api/clients/"+ id +"/commandes"
    return this.http.get<any>(COMMANDE_CLIENT_URL)
  }

  public getCommandesByZone(zone: string) {  return this.http.get<any>(environment.COMMANDE_URL+"?zone.nom="+zone) }

  public getById(id:number){  return this.http.get<any>(environment.COMMANDE_URL+"/"+id) }

  public annulerCommande(id) {  return this.http.put<any>(environment.COMMANDE_URL+"/"+id, { "etat": "annule" }) }

  public validerCommande(id){ return this.http.put<any>(environment.COMMANDE_URL+"/"+id, {  "etat": "valide" }) }

  public traiterCommande(id:number, etat:string){  return this.http.put<any>(environment.COMMANDE_URL+"/"+id, {  "etat": etat  }) }

  public getCommandes(){  return this.http.get<any>(environment.COMMANDE_URL)  }

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

}


