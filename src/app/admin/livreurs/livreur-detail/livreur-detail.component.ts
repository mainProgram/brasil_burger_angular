import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/shared/interface/interfaces';
import { LivraisonService } from 'src/app/shared/service/livraison.service';

@Component({
  selector: 'app-livreur-detail',
  templateUrl: './livreur-detail.component.html',
  styleUrls: ['./livreur-detail.component.scss']
})
export class LivreurDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private livreursService: LivraisonService, private retour:Router) { }

  public livreur : IUser
  public isLoaded:  boolean

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: param => {
        let id: number = +param.get("id")
        this.livreursService.getDetailLivreurs(id).subscribe({
          next: data => { 
            this.livreur = data 
            setTimeout(() => {
              this.isLoaded = true
            }, 3000);
          },
          error: data => { this.retour.navigate(["admin/livreurs"]) }
        })
      }
    })
  }

}
