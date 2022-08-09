import { Component, Input, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/shared/service/catalogue-service';

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

    public filtrage = []

    public tabPrixFiltered = []

    public  divBurgersMenusBoissonsFrites = document.getElementsByClassName("hide") 
    public  divFilterResults = document.getElementsByClassName("filterResults") 


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
                    this.menus.forEach(element => {
                        if(this.tabPrixFiltered.indexOf(element.prix) == -1)    //initialisation tableau de filtre de prix
                            this.tabPrixFiltered.push(""+element.prix)
                    });
                    
                    this.burgers.forEach(element => {
                        if(this.tabPrixFiltered.indexOf(element.prix) == -1)    //initialisation tableau de filtre de prix
                            this.tabPrixFiltered.push(""+element.prix)
                    });  

                    this.tabPrixFiltered.sort() //tri
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

   


    filterList = {
        nom: ["menu", "salad", "bacon", "burger", "ranch", "double"],
        prix: this.tabPrixFiltered,
        categorie: ["menu", "burger"]
    };  

    filterChange(appliedfilters) {
        let filtrage = []
        this.filtrage = []
        this.menus.forEach(element => filtrage.push(element))
        this.burgers.forEach(element => filtrage.push(element))

        let filtreCategorie = appliedfilters.appliedFilterValues.categorie;
        let filtrePrix = appliedfilters.appliedFilterValues.prix;
        let filtreNom = appliedfilters.appliedFilterValues.nom;

        if(!filtreCategorie && !filtrePrix && !filtreNom)
            this.unhide()
        else
        {
            this.hide()
            if(filtreCategorie && filtreNom && filtrePrix)
                filtrage.forEach(item => { if (item.prix == Number(filtrePrix) && item.categorie == filtreCategorie && item.nom.toLowerCase().indexOf(filtreNom) != -1) this.filtrage.push(item)})
            else if(filtreCategorie && filtreNom)
                filtrage.forEach(item => { if (item.categorie == filtreCategorie && item.nom.toLowerCase().indexOf(filtreNom) != -1) this.filtrage.push(item)})
            else if(filtreCategorie && filtrePrix)
                filtrage.forEach(item => { if (item.prix == Number(filtrePrix) && item.categorie == filtreCategorie) this.filtrage.push(item)})
            else if(filtreNom && filtrePrix)
                filtrage.forEach(item => { if (item.prix == Number(filtrePrix) && item.nom.toLowerCase().indexOf(filtreNom) != -1) this.filtrage.push(item)})
            else if(filtreNom)
                filtrage.forEach(item => { console.log(item.nom.toLowerCase()); if ( item.nom.toLowerCase().indexOf(filtreNom) != -1) this.filtrage.push(item)})
            else if(filtreCategorie)
                filtrage.forEach(item => { if ( item.categorie == filtreCategorie) this.filtrage.push(item)})
            else if(filtrePrix)
                filtrage.forEach(item => { if ( item.prix == Number(filtrePrix)) this.filtrage.push(item)})  
        }

        if(this.filtrage.length == 0)
            document.getElementsByClassName("no-results")[0].removeAttribute("hidden");
        
    }
    
    public hide(){
        document.getElementsByClassName("no-results")[0].setAttribute("hidden", "hidden");
        Array.from(this.divBurgersMenusBoissonsFrites).forEach((element) => { element.setAttribute("hidden", "hidden")})
        this.divFilterResults[0].removeAttribute("hidden")
    }

    public unhide(){
        this.divFilterResults[0].setAttribute("hidden", "hidden")
        Array.from(this.divBurgersMenusBoissonsFrites).forEach((element) => { element.removeAttribute("hidden")})
    }
}