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

  ngOnInit(): void 
  {
    this.route.paramMap.subscribe({ 
      next: data => { 
        let id  = +this.route.snapshot.paramMap.get("id")   
        
        this.livraisonService.getDetailLivraison(id).subscribe({
          next: el => {  this.livraison = el;},
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

}
