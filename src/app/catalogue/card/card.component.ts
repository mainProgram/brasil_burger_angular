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

    let id = produit.nom + produit.id
    let element =  document.getElementById(`${id}`).querySelector(".plusOne").classList // le petit +1 a chaque fois qu'on ajoute 1 produit au panier
    element.add("show")

    setTimeout( () => {
     element.remove("show")
    }, 1000);

    // this.produitPanier.emit(1)     
  }

  ngOnInit(): void { }
}
