import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduit } from 'src/app/interface/produit';
import { BoissonService } from 'src/app/service/boisson.service';
import { CatalogueService } from 'src/app/service/catalogue-service';
import { PanierService } from 'src/app/service/panier.service';

@Component({
  selector: 'app-catalogue-detail',
  templateUrl: './catalogue-detail.component.html',
  styleUrls: ['./catalogue-detail.component.scss']
})
export class CatalogueDetailComponent implements OnInit {

    public menus:IProduit[] = [];
    public burgers:IProduit[] = [];
    public produit : IProduit;
    public pm = []
    public gm = []
    public taillePM = 0
    public tailleGM = 0
    public taillepmvide : boolean
    public taillegmvide : boolean
    public find:boolean

    constructor(private route: ActivatedRoute, private catalogueService: CatalogueService, private retour:Router, private boissonService:BoissonService, private panierService: PanierService) { }

    ngOnInit(): void 
    {
        const id = +this.route.snapshot.paramMap.get("id");

        this.catalogueService.getProduits().subscribe({
          next: c => {
              this.menus = c.menus
              this.burgers = c.burgers

              this.produit = this.catalogueService.getById(id, this.burgers);
              if(this.produit === undefined)
                  this.produit = this.catalogueService.getById(id, this.menus);

              if(this.produit === undefined)
                this.retour.navigate(["/catalogue"]);
          },
      });

      this.boissonService.getBoissons().subscribe(
        boissons =>{
          this.pm = boissons.pm
          this.gm = boissons.gm

          if(this.produit.tailles){

            this.produit.tailles.forEach(taille => {
              (taille.taille.nom == "PM") ? this.taillePM = taille.quantite : this.tailleGM = taille.quantite
            })

            this.taillepmvide = (this.taillePM <= 0);
            this.taillegmvide = (this.tailleGM <= 0);
          }
        }
      )
    }

    tryme(nombre, nombre2){
      let r1 = this.tryme2(nombre, 'choixPM[]','qtePM[]');
      let r2 = this.tryme2(nombre2, 'choixGM[]','qteGM[]');

      (r1+r2 == 2) ? this.remove() : this.add()
    }

    tryme2(nombre, choixPMouGM, qtePMouGM){
      let checked = document.getElementsByName(`${choixPMouGM}`)

      let qtes = document.getElementsByName(`${qtePMouGM}`)

      let qteTotale = 0
      qtes.forEach(el => {
          if((<HTMLInputElement>el.previousElementSibling).checked)
            qteTotale += (+(<HTMLInputElement>el).value)
      })

      if(qteTotale != nombre) return 0
      
      else
      {
        let somme = 0
        checked.forEach(el => {
          if ((<HTMLInputElement>el).checked){
            let frere = +((<HTMLInputElement>el.nextElementSibling).value)
            if(frere == 0) somme ++
            else somme+= frere
          }
        })
        if(somme != nombre) return 0
        else return 1
      }
       
    }

    remove(){
      document.getElementById("addToPanier").classList.remove("disabled");
      document.getElementById("addToPanier").classList.add("btn");
      document.getElementById("addToPanier").classList.add("btn-outline-dark");
      document.getElementById("addToPanier").classList.add("detail");
    }

    add(){
      document.getElementById("addToPanier").classList.add("disabled");
      document.getElementById("addToPanier").classList.remove("btn");
      document.getElementById("addToPanier").classList.remove("btn-outline-dark");
      document.getElementById("addToPanier").classList.remove("detail");
    }

    public addToCart(produit : IProduit)
    {
        let bouton = document.getElementById("addToPanier")
        if(!(bouton.classList.contains('disabled')))
          this.panierService.ajouterAuPanier(produit)
    }
}
