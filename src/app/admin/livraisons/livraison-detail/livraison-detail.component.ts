import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeService } from 'src/app/shared/service/commande.service';
import { LivraisonService } from 'src/app/shared/service/livraison.service';

@Component({
  selector: 'app-livraison-detail',
  templateUrl: './livraison-detail.component.html',
  styleUrls: ['./livraison-detail.component.scss']
})
export class LivraisonDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private retour:Router, private livraisonService: LivraisonService, private commandeService: CommandeService) { }

  public livraison: any
  public activate: boolean

  ngOnInit(): void 
  {
    this.route.paramMap.subscribe({ 
      next: data => { 
        let id  = +this.route.snapshot.paramMap.get("id")   
        
        this.livraisonService.getDetailLivraison(id).subscribe({
          next: el => {  
            this.livraison = el;
            this.activate = this.activateButton()
          },
          error: el => {  this.retour.navigate(["/admin/livraisons"]) }
        })
      }
    })
  }

  public traiter(id: number, etat: string)  //Valider ou annuler la commande
  {                    
    this.commandeService.traiterCommande(id, etat).subscribe({
      next: data => { window.location.reload() }
    }) 
  }

  public traiterLivraison(id: number, etat: string)  //Valider ou annuler la commande
  {                    
    this.livraisonService.traiterLivraison(id, etat).subscribe({
      next: data => { window.location.reload() }
    }) 
  }

  public activateButton()
  {
    let bool = false
    this.livraison.commandes.forEach(commande => {
      if(commande.etat != "paye" && commande.etat != "annule")
        bool = true
    })
    return bool
  }
  
  getColour(etat: string) {  return this.commandeService.getColour(etat)}

  getIcon(etat: string){ return this.commandeService.getIcon(etat) }

}
