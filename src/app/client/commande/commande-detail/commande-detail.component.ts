import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICommande } from 'src/app/shared/interface/interfaces';
import { CommandeService } from 'src/app/shared/service/commande.service';

@Component({
  selector: 'app-commande-detail',
  templateUrl: './commande-detail.component.html',
  styleUrls: ['./commande-detail.component.scss']
})
export class CommandeDetailComponent implements OnInit {

  public commande : ICommande
  public commandes : ICommande[]
  public isLoaded : boolean

  constructor(private route: ActivatedRoute, private commandeService: CommandeService, private retour:Router) { }

  ngOnInit(): void 
  {
    const id = +this.route.snapshot.paramMap.get("id");

    this.commandeService.getById(id).subscribe({
      next: data => { 
        this.commande = data
        setTimeout(() => {
          this.isLoaded = true
        }, 3000);
      },
      error: err => {this.retour.navigate(["/commandes"])}
    })
  }

  getColour(etat: string) {  return this.commandeService.getColour(etat)}

  getIcon(etat: string){ return this.commandeService.getIcon(etat) }

}
