import { Component, Input, OnInit } from '@angular/core';
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
    public isLoaded: boolean;

    @Input()
    public receive : number = 0

    constructor(private catalogueService : CatalogueService) { }

    ngOnInit(): void 
    {
        setTimeout(()=> {
            this.isLoaded = true
            this.catalogueService.getProduits().subscribe({
                next: c => {
                    this.menus = c.menus
                    this.burgers = c.burgers
                },
                error: err => this.errorMsg = err
            });
        },1000);

    }

    public receiveAddCart(message){
        if(JSON.parse(localStorage.getItem("panier")))
        return this.receive = (JSON.parse(localStorage.getItem("panier"))).length
    }

}
