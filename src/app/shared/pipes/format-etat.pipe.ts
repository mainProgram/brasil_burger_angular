import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "formatEtat"
})

export class FormatEtat implements PipeTransform
{
    transform(etat: string) 
    {
       if( !!etat) //ni undefined ni null
       {
            if(etat == "en attente")
                etat = "En attente"
            else if(etat == "termine")
                etat = "Livré"
            else if(etat == "valide")
                etat = "En cours"
            else if(etat == "annule")
                etat = "Annulé"
            else if(etat == "livraison")    
                etat = "En cours de livraison"
        }
        return etat

    }

}