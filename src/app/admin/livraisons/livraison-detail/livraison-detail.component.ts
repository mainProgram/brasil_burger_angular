import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivraisonService } from 'src/app/shared/service/livraison.service';

@Component({
  selector: 'app-livraison-detail',
  templateUrl: './livraison-detail.component.html',
  styleUrls: ['./livraison-detail.component.scss']
})
export class LivraisonDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private retour:Router, private livraisonService: LivraisonService) { }

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

}
