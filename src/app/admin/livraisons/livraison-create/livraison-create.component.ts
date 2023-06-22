import { Component, OnInit } from '@angular/core';
import { ZoneService } from 'src/app/shared/service/zone.service';
import { ICommande, IZone } from 'src/app/shared/interface/interfaces';
import { LivraisonService } from 'src/app/shared/service/livraison.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livraison-create',
  templateUrl: './livraison-create.component.html',
  styleUrls: ['./livraison-create.component.scss']
})
export class LivraisonCreateComponent implements OnInit {

  constructor(private zoneService: ZoneService, private livraisonService: LivraisonService, private retour:Router) { }

  public zones : any
  public commandes : any
  public livreurs: any
  public isLoaded: boolean
  public zoneValue = 0
  
  ngOnInit(): void 
  {
    this.zoneService.getZonesDontCommandeEtatTermine().subscribe({next: el => this.zones = el})
  }

  public zoneChoisie(zone)
  {
    this.zoneService.getCommandesTermineesParZones(zone.value).subscribe({
      next: data => { this.commandes = data }
    })

    this.livraisonService.getLivreursDispo().subscribe({
      next: data => { 
        this.livreurs = data 
      }
    })
    this.zoneValue = zone
    setTimeout(() => {
      this.isLoaded = true
    }, 2000);
  }

  public areAllChecked()
  {
    let bool = 0

    let inputCommandes = (Array.from(document.getElementsByName("checkedCommandes[]")));
    let inputLivreurs = (Array.from(document.getElementsByName("checkedLivreurs[]")));
    let bouton = document.getElementById("create")

    inputCommandes.forEach(element => {  if((<HTMLInputElement>element).checked)  bool = 1  })

    inputLivreurs.forEach(element => {  if((<HTMLInputElement>element).checked)  bool += 1 })

    if (bool==2)   bouton.classList.remove("disabled")
    else           bouton.classList.add("disabled")                                       
    
  }

  public validerLivraison()
  {
    let inputCommandes = (Array.from(document.getElementsByName("checkedCommandes[]")));
    let inputLivreurs = (Array.from(document.getElementsByName("checkedLivreurs[]")));
    let commandesCochees : string[] = []
    let livreurCoche : number

    inputCommandes.forEach(element => {  
      if((<HTMLInputElement>element).checked)  
       commandesCochees.push("/api/commandes/"+(<HTMLInputElement>element).value)
    })

    inputLivreurs.forEach(element => {  
      if((<HTMLInputElement>element).checked)  
       livreurCoche = +(<HTMLInputElement>element).value
    })

    const body ={
      "livreur": "/api/livreurs/"+livreurCoche,
      "commandes": commandesCochees
    }

    console.log(body);
    

    this.livraisonService.creer(body).subscribe({
      next: data => { 
        console.log(data)
        this.retour.navigate(["/admin/livraisons/"])
      },
      error: data => { console.log(data)}
    })
    
  }
}
