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

  public page: number = 1;
  passenger: any; 
  itemsPerPage = 2;
  totalItems : any; 

  public commandeFiltrees = []
  public chosenDate = new Date().toISOString().substring(0,10);
  public changedDate = new Date().toISOString().substring(0,10);

  constructor(private commandeService: CommandeService, private retour: Router) { }

  ngOnInit(): void 
  { 
    this.commandeService.getCommandes().subscribe(elements =>
    { 
      this.commandes = elements
      this.commandeFiltrees = []

      this.newDate()                                          // retourne la date d'aujourd'hui

      elements.forEach(element => {
        if(element.date.split("T")[0] == this.chosenDate)     //choisis les commandes qui ont la date d'aujourd'hui
          this.commandeFiltrees.push(element)
      });
    })
  }

  public changeDate()
  {
    let newDate = (<HTMLInputElement>document.getElementById("input")).value; 
    (<HTMLInputElement>document.getElementById("input")).value = newDate;
    this.changedDate = newDate

    this.commandeFiltrees = []                        //filtrer encore les commandes suivant la date choisie
    this.commandes.forEach(element => {              
      if(element.date.split("T")[0] == newDate)
        this.commandeFiltrees.push(element)
    })      
  }
  
  public newDate()
  {
    var currentDate = new Date().toISOString().substring(0,10);
    return this.chosenDate = currentDate
  }

  public EngDate()
  {
    let date = new Date();    
    return (date.getMonth() + 1) + "-" +  date.getDate() + "-" + date.getFullYear() 
  }

  public traiter(id: number, etat: string)  //Valider ou annuler la commande
  {                    
    this.commandeService.traiterCommande(id, etat).subscribe({
      next: data => {this.retour.navigate(["/admin/commandes", data.id]) }
    }) 
  }
  
  getColour(etat: string) {  return this.commandeService.getColour(etat)}

  getIcon(etat: string){ return this.commandeService.getIcon(etat) }

}
