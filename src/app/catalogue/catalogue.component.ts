import { Component, OnInit } from '@angular/core';
import { ICatalogue } from '../interface/catalogue';
import { CatalogueService } from '../service/catalogue-service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})

export class CatalogueComponent implements OnInit 
{

    public menus: any = [];
    public burgers: any = [];

    public errorMsg = "";

    constructor(private catalogueService : CatalogueService) { }

    ngOnInit(): void 
    {
        this.catalogueService.getProduits().subscribe({
            next: c => {
                this.menus = c.menus
                this.burgers = c.burgers
            },
            error: err => this.errorMsg = err
        });
    }

}
