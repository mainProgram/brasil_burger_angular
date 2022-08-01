import { Component, OnInit } from '@angular/core';
import { IProduit } from '../interface/produit';
import { PanierService } from '../service/panier.service';
import { ZoneService } from '../service/zone.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  constructor(private panierService: PanierService, private zoneService: ZoneService) { }

  ngOnInit(): void 
  {
    this.panierService.getPanier().subscribe(produits => { this.elements = produits })

    this.calculPrixPanier()
  }

  public elements = []

  public prixTotal = 0

  public option = 0

  public zones = []

  public prixLivraison = 0

  public delete(produit:IProduit) {  this.panierService.remove(produit) } //Supression d'un produit du panier
  
  public plusOuMoins(element:IProduit, val:number) { this.panierService.plusOuMoins(element, val)} //réduction ou augmentation de la quantité d'un produit du panier

  mode(option, valider) // retrait ou livraison
  {
      let liv = document.getElementById("liv")
      let prixLiv = document.getElementById("prixLivraison")

      if(option.value == 1) // retrait
      {
          liv.setAttribute("hidden", "hidden")        //on cache le texte livraison
          prixLiv.setAttribute("hidden", "hidden")    //on cache le prix de la livraison
          valider.classList.remove("disabled")        //on active le bouton valider
          this.prixLivraison = 0                      //on remet le prix de la livraison a 0 
          this.calculPrixPanier()                     //et on recalcule le prix total du panier
      }
      else if(option.value == 2) //livraison
      {
          liv.removeAttribute("hidden")                     //on affiche le texte livraison    
          prixLiv.removeAttribute("hidden")                 //on affiche le prix de la livraison
          this.zoneService.getZones().subscribe( zones => { 
            this.zones = zones                              //on stocke les zones dans lattribut
          } ) 
          this.prixLivraison  = 1000 ;                      //pour la premiere fois la zone 1 est selectionne et son prix est affiche
          this.prixTotal += this.prixLivraison              //et on ajoute le prix de la livraison au prix total du panier

          let top = liv.offsetTop + 500                    //on abaisse le scrollbar jusquau niveau du div avec les zones de livraison
          window.scrollTo(0,top)
          valider.classList.remove("disabled")            //on active le bouton valider
      }
  }

  public changeOptionLiv(optionLiv)  // suivant la zone de livraison choisie on recalcule le prix du panier et on met a jour le texte qui affiche le prix de la liv
  {
    this.zones.forEach(zone => {
      if(zone.id == optionLiv.value)
        this.prixLivraison = zone.prix
    })

    this.calculPrixPanier()
  }
  
  public calculPrixPanier(){
    this.panierService.getPanier().subscribe(produits => {

      this.prixTotal = 0

      this.elements.forEach(el => {
        this.prixTotal += el.quantite * el.prix
      })
      
      this.prixTotal += this.prixLivraison
    })
  }
}
