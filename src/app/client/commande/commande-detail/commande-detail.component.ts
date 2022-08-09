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
    const id = +this.route.snapshot.paramMap.get("id");

    this.commandeService.getById(id).subscribe(el=>{
      this.commande = el
      console.log(this.commande)
    })

    // this.commandeService.getCommandesById(1).subscribe(elements => 
    // {
    //     this.commandes = elements
    //     // this.commande = this.commandeService.getById(id, this.commandes);
    
    //     if(this.commande === undefined)
    //         this.retour.navigate(["/commandes"]);
    // })

  }

}
