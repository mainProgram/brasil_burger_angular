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
  public etatFormate = ""

  constructor(private route: ActivatedRoute, private commandeService: CommandeService, private retour:Router) { }

  ngOnInit(): void 
  {        
    let nom : string;

    this.route.paramMap.subscribe(param => { //DYNAMISME DES ROUTES POUR LES DETAILS
        nom = this.route.snapshot.paramMap.get("param")
        var regex = new RegExp('^[0-9]$');
    
        if(regex.test(nom))
        {
          this.commandes = null
          const id = +this.route.snapshot.paramMap.get("param");    
      
          this.commandeService.getById(id).subscribe({
            next: data => { this.commande = data },
            error: err => { this.retour.navigate(["/admin/commandes"]) }
          })
        }
        else
        {
          this.commande = null
          this.commandeService.getCommandesByZone(nom).subscribe({
            next: data => { 
              this.commandes = data 
              console.log(this.commandes);
              
            },
          })
        }
    })
  }

  public traiter(id: number, etat: string)  //Valider ou annuler la commande
  {                    
    this.commandeService.traiterCommande(id, etat).subscribe({
      next: data => {this.retour.navigate(["/admin/commandes", data.id]).then( () => window.location.reload()) }
    }) 
  }

  getColour(etat: string) {  return this.commandeService.getColour(etat)}

  getIcon(etat: string){ return this.commandeService.getIcon(etat) }

}
