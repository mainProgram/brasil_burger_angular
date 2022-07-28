import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduit } from 'src/app/interface/produit';
import { CatalogueService } from 'src/app/service/catalogue-service';

@Component({
  selector: 'app-catalogue-detail',
  templateUrl: './catalogue-detail.component.html',
  styleUrls: ['./catalogue-detail.component.scss']
})
export class CatalogueDetailComponent implements OnInit {

    public menus:IProduit[] = [];
    public burgers:IProduit[] = [];
    public produit : IProduit;

    constructor(private route: ActivatedRoute, private catalogueService: CatalogueService, private retour:Router) { }

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

              this.menus.forEach(element => {
                
                // console.log(element.frites)
                (element.frites).forEach(el =>console.log(el.quantite))
              });

              if(this.produit === undefined)
                this.retour.navigate(["/catalogue"]);
          },
      });
    }

}
