import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeService } from 'src/app/shared/service/commande.service';
import { TokenService } from 'src/app/shared/service/token.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit 
{
  public commandes = []
  public newDate = ""
  searchTerm = new Date().toISOString().substring(0,10);

  constructor(private commandeService: CommandeService, private retour:Router, private tokenService: TokenService) { }

  ngOnInit(): void 
  {
    let idClientConnecte = +this.tokenService.getId()
    this.commandeService.getCommandesById(idClientConnecte).subscribe({next: data => {  this.commandes = data }})
    this.todayDate()
  }

  public annulerCommande(id)
  {
    this.commandeService.traiterCommande(id, "annule").subscribe(el => {
      this.retour.navigate(["/commandes", el.id])
    })
  }

  getColour(etat: string) {  return this.commandeService.getColour(etat)}

  getIcon(etat: string){ return this.commandeService.getIcon(etat) }

  public todayDate(){  this.newDate = this.commandeService.newDate()  }

}
