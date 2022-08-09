import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeService } from 'src/app/shared/service/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit 
{

  public commandes = []
  public etatFormate = ""

  constructor(private commandeService: CommandeService, private retour:Router) { }

  ngOnInit(): void {
    this.commandeService.getCommandesById(1).subscribe(el => {
      this.commandes = el
      // console.log(this.commandes);
    })
  }


  public annulerCommande(id)
  {
    this.commandeService.annulerCommande(id).subscribe(el => {
      this.retour.navigate(["/commandes", el.id])
    })
    // window.location.reload()
  }


  getColour(etat)
  {
    if(etat == "en attente")
        return "orange"
    else if(etat == "termine")
        return "green"
    else if(etat == "valide")
        return "blue"
    else if(etat == "annule")
        return "red";
    else if(etat == "livraison")    
        return "blue"
    return "no"
  }

  getIcon(etat)
  {
    if(etat == "en attente")
        return "pending"
    else if(etat == "termine")
        return "done"
    else if(etat == "valide")
        return "schedule"
    else if(etat == "annule")
        return "close";
    else if(etat == "livraison")    
        return "local_shipping"
        return "blue"
  }

}

//schedule done
