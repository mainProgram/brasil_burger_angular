import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICatalogue } from 'src/app/interface/catalogue';
import { IProduit } from 'src/app/interface/produit';
import { PanierService } from 'src/app/service/panier.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  produit!: IProduit ;

  public static tabPanier : IProduit[] = [];

  @Input()
  disable?: string

  @Output()
  public produitPanier: EventEmitter<number> = new EventEmitter<number>;

  constructor(private panierService: PanierService) { }

  public addToCart(produit : IProduit){

    this.panierService.ajouterAuPanier(produit);

    document.getElementById(`${produit.id}`).querySelector(".plusOne").classList.add("show")

    setTimeout( () => {
      document.getElementById(`${produit.id}`).querySelector(".plusOne").classList.remove("show")
    }, 1000);

    // this.produitPanier.emit(1) 

    // let tab = JSON.parse(localStorage.getItem("panier"));
    // if(tab){
    //   let found = tab.find(param => param.id == produit.id)
    //   if(!found)
    //       CardComponent.tabPanier.push(newproduit)
    // }
    


    // localStorage.setItem("panier", JSON.stringify(CardComponent.tabPanier))
    
  }

  
  ngOnInit(): void {
   
  }

}
