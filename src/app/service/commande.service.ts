import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, take, map } from 'rxjs';
import { ICommande } from '../interface/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  mesCommandesSubject =  new BehaviorSubject<ICommande[]>([]);
  commandes = this.mesCommandesSubject.asObservable();

  constructor(private http:HttpClient) 
  { 
    let commandesDuClient = JSON.parse(localStorage.getItem("commandes")); 

      if(!commandesDuClient) commandesDuClient = [];

      this.mesCommandesSubject.next(commandesDuClient);
  }

  ajouterCommande(commande: ICommande)
  {
    this.commandes.pipe(
      take(1),

      map((commandes: ICommande[]) => {
          
        commandes.push(commande);
            
        this.mesCommandesSubject.next(commandes); //on passe le nouveau tableeau au behaviourSubject

        console.log(localStorage.setItem("commandes", JSON.stringify(commandes))); //on ecrase le tableau de commandes du local storage avec le new

       
      })
    ).subscribe();
  }


  public saveOrder(body){
    this.http.post<any>("https://127.0.0.1:8000/api/commandes", body).subscribe(
      {
        next: data => {
          console.log(data.id)
        },
        // error: error =>{
        //   alert("Y'a erreur")
        // }
      }
    )
  }
}
