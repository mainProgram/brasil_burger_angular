import { Pipe, PipeTransform } from "@angular/core";
import { BoissonService } from "src/app/service/boisson.service";

@Pipe({
    name: "tailleBoissonPipe"
})

export class TailleBoissonPipe implements PipeTransform
{
    constructor(private complementsService:BoissonService){}

    public toutesLesBoissons = []
    public nom = ""

    transform(iri: string) 
    {     
        let tab = iri.split("/");
        let id = Number(tab[3]);
        
        this.complementsService.getProducts().then(elements => {
            elements.pm.forEach(el => {if(el.id == id) {
                }
            })
            elements.gm.forEach(el => {if(el.id == id) {
                this.nom =(el.nom)
             }})
        })
        

        // this.complementsService.getComplements().subscribe(elements => {
        //     elements.pm.forEach(el => {
        //         if(el.id == id) {
        //            this.nom =(el.nom)
        //         }
        //     })
        //     elements.gm.forEach(el => {if(el.id == id) {
        //         this.nom =(el.nom)
        //      }})
        // })

    }
}