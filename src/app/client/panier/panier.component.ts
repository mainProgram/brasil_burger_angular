import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IProduit } from 'src/app/shared/interface/interfaces';
import { BoissonService } from 'src/app/shared/service/boisson.service';
import { CommandeService } from 'src/app/shared/service/commande.service';
import { PanierService } from 'src/app/shared/service/panier.service';
import { ZoneService } from 'src/app/shared/service/zone.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit 
{
  @ViewChild("prixLivraison") prixLiv : ElementRef
  @ViewChild("optionLiv") optionliv : ElementRef
  @ViewChild("valider") valider : ElementRef
  @ViewChild("liv") liv : ElementRef

  public elements = []
  public prixTotal = 0
  public option = 0
  public zones = []
  public zone = null
  public prixLivraison2  = 0
  public complements = []

  constructor(private panierService: PanierService, private zoneService: ZoneService, private commandeService: CommandeService, private complementsService:BoissonService) { }

  ngOnInit(): void 
  {
    this.panierService.getPanier().subscribe(produits => { this.elements = produits }) // elements du panier

    this.calculPrixPanier() //prix du panier
  
    this.complementsService.getComplements().subscribe(   //  Compléments 
      complements =>{
        complements.pm.forEach(b => { this.complements.push(b) })
        complements.gm.forEach(b => { this.complements.push(b) })
        complements.frites.forEach(b => { this.complements.push(b) })
      })
  }

  public delete(produit:IProduit) {  this.panierService.remove(produit) } //Supression d'un produit du panier
  
  public plusOuMoins(element:IProduit, val:number) { this.panierService.plusOuMoins(element, val)} //réduction ou augmentation de la quantité d'un produit du panier

  mode(option, valider) // retrait ou livraison
  {
      let liv = this.liv.nativeElement
      let prixLiv = this.prixLiv.nativeElement                       

      if(option.value == 1) // retrait
      {
          this.optionliv.nativeElement.value = "0";
          liv.setAttribute("hidden", "hidden")        //on cache le texte livraison
          prixLiv.setAttribute("hidden", "hidden")    //on cache le prix de la livraison
          valider.classList.remove("disabled")        //on active le bouton valider
          this.prixLivraison2 = 0                      //on remet le prix de la livraison a 0 
          this.calculPrixPanier()                     //et on recalcule le prix total du panier
      }
      else if(option.value == 2) //livraison
      {
          this.valider.nativeElement.classList.add('disabled')        //on active le bouton valider 
          this.zoneService.getAllZones().subscribe( zones => { 
            this.zones = zones                              //on stocke les zones dans lattribut
          } ) 
          this.liv.nativeElement.removeAttribute("hidden")    //on affiche le texte livraison    
          let top = liv.offsetTop + 500                    //on abaisse le scrollbar jusquau niveau du div avec les zones de livraison
          window.scrollTo(0,top)
      }
  }

  public changeOptionLiv(optionLiv)  // suivant la zone de livraison choisie on recalcule le prix du panier et on met a jour le texte qui affiche le prix de la liv
  {
    this.zones.forEach(zone => {
      if(zone.id == optionLiv.value)
        this.prixLivraison2 = zone.prix        
    })
    this.prixLiv.nativeElement.removeAttribute("hidden")                        
    this.valider.nativeElement.classList.remove("disabled")            //on active le bouton valider
    this.calculPrixPanier()                                                   //et on recalcule le prix total du panier
  }
  
  public calculPrixPanier(){
    this.panierService.getPanier().subscribe({
      next: data => { 
          this.prixTotal = 0
          this.elements.forEach(el => {  this.prixTotal += el.quantite * el.prix })
          this.prixTotal += this.prixLivraison2
      }
    })
  }

  public commander(optionLiv)
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
          let tabBoissonsMenus = el.tabBoissonsMenu.length > 0 ? el.tabBoissonsMenu : null
          let objet = {
            "quantite": el.quantite,
            "menu": "/api/menus/"+el.id,
            "prix":  el.quantite * el.prix,
            "commandeMenuTailleBoissons": tabBoissonsMenus
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
        "commandeMenus": tabMenus,
        "commandeBurgers": tabBurgers,
        "commandeFrites": tabFrites,
        "commandeTailleBoissons": tabTailleBoissons
      }

      this.commandeService.saveOrder(tab);

      this.panierService.resetPanier()
      
      this.liv.nativeElement.setAttribute("hidden", "hidden")
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

  public resetPanier(){ this.panierService.resetPanier(); this.elements = []}
}
