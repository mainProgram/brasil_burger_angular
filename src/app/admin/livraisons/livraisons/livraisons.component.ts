import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/shared/service/commande.service';
import { LivraisonService } from 'src/app/shared/service/livraison.service';

@Component({
  selector: 'app-livraisons',
  templateUrl: './livraisons.component.html',
  styleUrls: ['./livraisons.component.scss']
})
export class LivraisonsComponent implements OnInit {

  constructor(private livraisonService: LivraisonService, private commandeService: CommandeService) { }

  public livraisons : any
  public newDate = ""
  searchTerm = new Date().toISOString().substring(0,10);
  public isLoaded: boolean

  ngOnInit(): void 
  {
    this.livraisonService.getAllLivraisons().subscribe({
      next: data => { 
        this.livraisons = data
        this.isLoaded = true
      }
    })
  }

  getColour(etat: string) {  return this.commandeService.getColour(etat)}

  getIcon(etat: string){ return this.commandeService.getIcon(etat) }

  public traiter(id: number, etat: string) { this.livraisonService.traiterLivraison(id, etat)}

  public todayDate(){  this.newDate = this.commandeService.newDate()  }


}
