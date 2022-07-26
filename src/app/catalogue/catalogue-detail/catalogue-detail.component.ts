import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogueService } from 'src/app/service/catalogue-service';

@Component({
  selector: 'app-catalogue-detail',
  templateUrl: './catalogue-detail.component.html',
  styleUrls: ['./catalogue-detail.component.scss']
})
export class CatalogueDetailComponent implements OnInit {

    public menus:any = [];
    public burgers:any = [];
    public produit = 0;

    constructor(private route: ActivatedRoute, private catalogueService: CatalogueService, private retour:Router) { }

    ngOnInit(): void 
    {
        const id = +this.route.snapshot.paramMap.get("id");

        this.catalogueService.getProduits().subscribe({
          next: c => {
              this.menus = c.menus
              this.burgers = c.burgers


              this.produit = this.menus.find(p => p.id === id)

              if(this.produit==0 || this.produit == undefined)
                  this.produit = this.burgers.find(p => p.id === id)

              if(this.produit === undefined)
                this.retour.navigate(["/catalogue"]);
          },
      });
    }

}
