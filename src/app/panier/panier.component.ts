import { Component, OnInit } from '@angular/core';
import { ICommande } from '../interface/commande';
import { IProduit } from '../interface/produit';
import { CommandeService } from '../service/commande.service';
import { PanierService } from '../service/panier.service';
import { ZoneService } from '../service/zone.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  constructor(private panierService: PanierService, private zoneService: ZoneService, private commandeService: CommandeService) { }

  ngOnInit(): void 
  {
    this.panierService.getPanier().subscribe(produits => { this.elements = produits })

    this.calculPrixPanier()
  }

  public elements = []

  public prixTotal = 0

  public option = 0

  public zones = []

  public zone = null

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
          this.zoneService.getZones().subscribe( zones => { 
            this.zones = zones                              //on stocke les zones dans lattribut
          } ) 
          liv.removeAttribute("hidden")                     //on affiche le texte livraison    
          let top = liv.offsetTop + 500                    //on abaisse le scrollbar jusquau niveau du div avec les zones de livraison
          window.scrollTo(0,top)
      }
  }

  public changeOptionLiv(optionLiv)  // suivant la zone de livraison choisie on recalcule le prix du panier et on met a jour le texte qui affiche le prix de la liv
  {
    this.zones.forEach(zone => {
      if(zone.id == optionLiv.value)
        this.prixLivraison = zone.prix
    })
    let prixLiv = document.getElementById("prixLivraison")
    prixLiv.removeAttribute("hidden")                                           //on affiche le prix de la livraison
    document.getElementById("valider").classList.remove("disabled")            //on active le bouton valider
    this.calculPrixPanier()                                                   //et on recalcule le prix total du panier
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

  public commander(option, optionLiv)
  {
    if(!this.isThereAMenuOrABurger())
      alert("Choisissez un menu ou un burger !")
    else
    {
      let tabBurgers = []
      let tabMenus = []
      let tabFrites = []
      let tabTailleBoissons = []

      this.elements.forEach(el => {
        if(el.categorie == "burger")
        {
          let objet = {
              "quantite": el.quantite,
              "burger": "/api/burgers/"+el.id,
              "prix":  el.quantite * el.prix
          }
          tabBurgers.push(objet)
          console.log(tabBurgers)
        }
        else if(el.categorie == "menu")
        {
          let objet = {
            "quantite": el.quantite,
            "menu": "/api/menus/"+el.id,
            "prix":  el.quantite * el.prix
          }
          tabMenus.push(objet)
        }
        else if(el.categorie == "frite")
        {
          let objet =
          {
            "quantite": el.quantite,
            "frite": "/api/frites/"+el.id,
            "prix":  el.quantite * el.prix
          }
          tabFrites.push(objet)
        }
        else
        {
          let objet =
          {
            
            "quantite": el.quantite,
            "tailleBoisson": "/api/taille_boissons/"+el.id,
            "prix":  el.quantite * el.prix
          }
          tabTailleBoissons.push(objet)
        }
      })

      if( optionLiv.value != 0)
          this.zone = "api/zones/"+optionLiv.value

      const tab = 
      {
        "zone" : this.zone,
        "client": "api/clients/1",
        "etat": "en attente",
        "prix": this.prixTotal,
        "date": Date,
        "commandeMenus": tabMenus,
        "commandeBurgers": tabBurgers,
        "commandeFrites": tabFrites,
        "commandeTailleBoissons": tabTailleBoissons
      }
      // const tab = 
      // {
      //   "zone" : "api/zones/"+optionLiv.value,
      //   "client": "api/clients/1",
      //   "etat": "en attente",
      //   "prix": this.prixTotal,
      //   "date": Date,
      //   "commandeMenus": tabMenus.map(function(item) {
      //     return [
      //         {
      //           "quantite": item.quantite,
      //           "menu": "api/menus/"+item.id,
      //           "prix":  item.quantite * item.prix
      //         }
      //       ]
      //   }),
      //   "commandeBurgers": tabBurgers.map(function(item) {
      //     return [
      //         {
      //           "quantite": item.quantite,
      //           "burger": "api/burgers/"+item.id,
      //           "prix":  item.quantite * item.prix
      //         }
      //       ]
      //   }),
      //   "commandeFrites": tabFrites.map(function(item) {
      //     return [
      //         {
      //           "quantite": item.quantite,
      //           "frite": "api/frites/"+item.id,
      //           "prix":  item.quantite * item.prix
      //         }
      //       ]
      //   }),
      //   "commandeTailleBoissons": tabTailleBoissons.map(function(item) {
      //     return [
      //         {
      //           "quantite": item.quantite,
      //           "tailleBoisson": "/api/taille_boissons/"+item.id,
      //           "prix":  item.quantite * item.prix
      //         }
      //       ]
      //   }),
      // }
   
      this.commandeService.saveOrder(tab);

      this.panierService.resetPanier()
      
      let liv = document.getElementById("liv")
      liv.setAttribute("hidden", "hidden")
    }
  }

  public isThereAMenuOrABurger()
  {
    let burgerOrMenuFound = false
    this.elements.forEach(el => {
      if(el.categorie && ( el.categorie == "burger" || el.categorie == "menu"))
        burgerOrMenuFound = true
    })

    return burgerOrMenuFound
  }
}
