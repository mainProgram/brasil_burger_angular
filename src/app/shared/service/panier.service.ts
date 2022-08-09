import { Injectable } from '@angular/core';
import { BehaviorSubject, take, map } from 'rxjs';
import { IProduit } from '../interface/interfaces';

@Injectable({ providedIn: 'root' })
export class PanierService 
{

  mesAchatSubject =  new BehaviorSubject<IProduit[]>([]);
  achats = this.mesAchatSubject.asObservable();

  constructor() 
  { 
      let mesProduitsDuPanier = JSON.parse(localStorage.getItem("panier")); 

      if(!mesProduitsDuPanier) mesProduitsDuPanier = [];

      this.mesAchatSubject.next(mesProduitsDuPanier);
  }

  ajouterAuPanier(produit: IProduit)
  {
    this.achats.pipe(
      take(1),

      map((produits: IProduit[]) => {
          
        let tab = JSON.parse(localStorage.getItem("panier"));

          if(tab)
          {
            let found = false
            tab.forEach(p => {
              if (produit.id == p.id && produit.nom == p.nom)
                found = true
            })

            if(!found) //Si on ne trouve pas le produit dans le panier on l'ajoute
            {
              produit = Object.assign({}, produit, {"quantite":1}) //qte du produit for the very first time

              produits.push(produit);
            }
            else // si on l'a trouvé on augmente sa quantité
            {
              // if(produit.categorie == "menu" && produit.tailles)
              // {
              //   produit = Object.assign({}, produit, {"quantite":1}) //qte du produit for the very first time
              //   produits.push(produit);
              // }
                produits.forEach(p => {
                  if(p.id == produit.id)
                    p.quantite++;
                })
            }
          }

        this.mesAchatSubject.next(produits); //on passe le nouveau tableeau au behaviourSubject

        localStorage.setItem("panier", JSON.stringify(produits)); //on ecrase le panier du local storage avec le new
      })
    ).subscribe();
  }

  getPanier(){ return this.achats } //Retourne le panier 
 
  remove(produit: IProduit){
    this.achats.pipe(
      take(1),

      map((produits: IProduit[]) => {
        let tab = JSON.parse(localStorage.getItem("panier"));

        if(tab){
          let found = tab.find(param => param.id == produit.id)
          if(found)
          {
            produits.splice(produits.indexOf(produit), 1)

            this.mesAchatSubject.next(produits);

            localStorage.setItem("panier", JSON.stringify(produits));
          }
      }})).subscribe()
  }  

  plusOuMoins(produit: IProduit, plusOuMoins:number){

    this.achats.pipe(
      take(1),

      map((produits: IProduit[]) => {
          
        let tab = JSON.parse(localStorage.getItem("panier"));

          if(tab){
            let found = false
            tab.forEach(p => {
              if (produit.id == p.id && produit.nom == p.nom)
                found = true
            })
            if(found)
            {
                produits.forEach(p => {
                  if(produit.id == p.id && produit.nom == p.nom)
                    if(plusOuMoins == 1)  
                      p.quantite++  
                    else if(p.quantite > 1)
                      p.quantite--;
                })
            }
          }

        this.mesAchatSubject.next(produits);
        localStorage.setItem("panier", JSON.stringify(produits));
      })
    ).subscribe();
  }

  resetPanier()
  {
    this.mesAchatSubject.next([]);
    localStorage.setItem("panier", JSON.stringify([]));
  }

}
