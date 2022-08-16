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
            if(etat == "en attente" || etat == "en cours")
                etat = "En attente"
            else if(etat == "termine")
                etat = "Terminé"
            else if(etat == "valide")
                etat = "En cours"
            else if(etat == "annule")
                etat = "Annulé"
            else if(etat == "livraison")    
                etat = "En cours de livraison"
            else if(etat == "paye")    
                etat = "Livré"
        }
        return etat

    }

}