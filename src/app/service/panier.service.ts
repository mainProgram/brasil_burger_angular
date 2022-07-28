import { Injectable } from '@angular/core';
import { BehaviorSubject, take, map } from 'rxjs';
import { IProduit } from '../interface/produit';

@Injectable({
  providedIn: 'root'
})


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

          if(tab){
            let found = tab.find(param => param.id == produit.id)
            if(!found)
            {
              produit = Object.assign({}, produit, {"quantite":1})

              produits.push(produit);
            }
            else
            {
                produits.forEach(p => {
                  if(p.id == produit.id)
                    p.quantite++;
                })
            }
          }

        this.mesAchatSubject.next(produits);

        localStorage.setItem("panier", JSON.stringify(produits));
      })
    ).subscribe();
  }

  getPanier(){ return this.achats }

 
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
  
  // getAchats() {
  //   return this.achats;
  // }

  // chargerPanier(): void {
  //   this.achats = JSON.parse(localStorage.getItem('panier')) ?? [];
  // }

  // sauvegarerPanier(): void {
  //   localStorage.setItem('cart_items', JSON.stringify(this.achats));
  // }

}
