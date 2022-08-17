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
  public newDate = ""
  searchTerm = new Date().toISOString().substring(0,10);
  
  constructor(private commandeService: CommandeService, private retour: Router) { }

  ngOnInit(): void 
  { 
    this.commandeService.getCommandes().subscribe(elements =>
    { 
      this.commandes = elements
      this.todayDate()
    })
  }

  public traiter(id: number, etat: string)  //Valider ou annuler la commande
  {                    
    this.commandeService.traiterCommande(id, etat).subscribe({
      next: data => {this.retour.navigate(["/admin/commandes", data.id]) }
    }) 
  }
  
  getColour(etat: string) {  return this.commandeService.getColour(etat)}

  getIcon(etat: string){ return this.commandeService.getIcon(etat) }

  public todayDate(){  this.newDate = this.commandeService.newDate()  }

}
