import { Pipe, PipeTransform } from "@angular/core";
import { BoissonService } from "../service/boisson.service";

@Pipe({
    name: "tailleBoissonPipe"
})

export class TailleBoissonPipe implements PipeTransform
{
    constructor(private complementsService:BoissonService){}

    public nom = ""

    async transform(iri: string) 
    {     
        let tab = iri.split("/");
        let id = Number(tab[3]);
        
        let res = await this.getName(id)     
        return (res);       
    }
    
    async getName(id: number)
    {
        let tailleBoisson ;
        let products = await this.complementsService.getProducts();

        tailleBoisson = (products.pm.find(el => el.id == id)) ;
        tailleBoisson = (tailleBoisson) ? tailleBoisson : (products.gm.find(el => el.id == id));
                
        return await tailleBoisson.nom
    }
}