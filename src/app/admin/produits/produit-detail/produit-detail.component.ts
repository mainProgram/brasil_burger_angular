import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduit } from 'src/app/shared/interface/interfaces';
import { ProduitService } from 'src/app/shared/service/produit.service';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.scss']
})
export class ProduitDetailComponent implements OnInit {

  public produit : IProduit

  constructor(private produitService: ProduitService, private route: ActivatedRoute, private retour:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => 
    { 
      let id = +this.route.snapshot.paramMap.get("id")

      this.produitService.getOneProduct(id).subscribe({
        next: data => { 
          this.produit = data
          this.retour.navigate(["/admin/produits", data.id])
        }
      })
    })
  }
}
