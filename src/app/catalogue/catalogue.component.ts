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
    public frites: any = [];
    public boissons: any = [];

    public errorMsg = "";
    public isLoaded: boolean;

    public hidden = "rm"

    @Input()
    public receive : number = 0

    constructor(private catalogueService : CatalogueService) { }

    ngOnInit(): void 
    {
        setTimeout(()=> {
            this.isLoaded = true
            this.catalogueService.getProduits().subscribe({         //Menus et burgers
                next: c => {
                    this.menus = c.menus
                    this.burgers = c.burgers
                },
                error: err => this.errorMsg = err
            });

            this.catalogueService.getComplements().subscribe({      //frites et boissons
                next: c => {
                    this.frites = c.frites
                    this.boissons = c.pm.concat(c.gm)
                },
                error: err => this.errorMsg = err
            });
        },1000);

    }

    // public receiveAddCart(message){
    //     if(JSON.parse(localStorage.getItem("panier")))
    //     return this.receive = (JSON.parse(localStorage.getItem("panier"))).length
    // }

}
