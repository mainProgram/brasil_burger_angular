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

  constructor(private commandeService: CommandeService, private retour:Router) { }

  ngOnInit(): void 
  {
    this.commandeService.getCommandesById(1).subscribe({next: data => {  this.commandes = data }})
  }

  public annulerCommande(id)
  {
    this.commandeService.traiterCommande(id, "annule").subscribe(el => {
      this.retour.navigate(["/commandes", el.id])
    })
  }

  getColour(etat: string) {  return this.commandeService.getColour(etat)}

  getIcon(etat: string){ return this.commandeService.getIcon(etat) }

}
