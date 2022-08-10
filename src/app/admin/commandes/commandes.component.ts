import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeService } from 'src/app/shared/service/commande.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss']
})
export class CommandesComponent implements OnInit {

  public commandes = []
  public chosenDate = ""
  public commandeFiltrees = []

  constructor(private commandeservice: CommandeService, private retour: Router) { }

  ngOnInit(): void { 
    this.commandeservice.getCommandes().subscribe(el =>
      { 
        this.commandes = el
        this.commandeFiltrees = []
        this.newDate()
        el.forEach(element => {
          
          if(element.date.split("T")[0] == this.chosenDate)
            this.commandeFiltrees.push(element)
        });
      })
  }

  public changeDate()
  {
    let newDate = (<HTMLInputElement>document.getElementById("input")).value;
    (<HTMLInputElement>document.getElementById("input")).value = newDate;
    this.commandeFiltrees = []
    this.commandes.forEach(element => {
      console.log("new:" + newDate);
      console.log(element.date.split("T")[0]);
      if(element.date.split("T")[0] == newDate)
      {
        this.commandeFiltrees.push(element)
      }
    })
  }
  
  public newDate()
  {
    let date = new Date();

    var currentDate = date.toISOString().substring(0,10);

    let days:any = date.getDate()
    let months:any = date.getMonth() + 1
    let years = date.getFullYear()

    days = (days < 10 ? "0" : "") + days
    months = (months < 10 ? "0" : "") + months

    return this.chosenDate = years + "-" +  months + "-" +  days
  }

  public EngDate()
  {
    let date = new Date();
    console.log((date.getMonth() + 1) + "-" +  date.getDate() + "-" + date.getFullYear() );
    
    return (date.getMonth() + 1) + "-" +  date.getDate() + "-" + date.getFullYear() 
  }

  public annuler(id: number)
  {
    this.commandeservice.annulerCommande(id).subscribe(el => {
      this.retour.navigate(["/admin/commandes", el.id])
    })
  }

  public valider(id: number)
  {
    this.commandeservice.validerCommande(id).subscribe(el => {
      this.retour.navigate(["/admin/commandes", el.id])
    })  
  }

  public traiter(id: number, etat: string)
  {
    this.commandeservice.traiterCommande(id, etat)
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
