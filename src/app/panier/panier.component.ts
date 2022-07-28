import { Component, OnInit } from '@angular/core';
import { IProduit } from '../interface/produit';
import { PanierService } from '../service/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  constructor(private panierService: PanierService) { }

  ngOnInit(): void {

    this.panierService.getPanier().subscribe(produits => {
      this.elements = produits
    })

    this.panierService.getPanier().subscribe(produits => {
      this.elements = produits

      this.prixTotal = 0

      this.elements.forEach(el => {
        this.prixTotal += el.quantite * el.prix
      })
    })
  }

  public elements = []

  public prixTotal = 0

  public delete(produit:IProduit) {
    console.log(2)
    this.panierService.remove(produit)
  }
  

}
