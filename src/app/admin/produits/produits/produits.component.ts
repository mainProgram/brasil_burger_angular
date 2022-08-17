import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/shared/service/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.produitService.getAllProducts().subscribe({
      next: data => { this.produits = data}
    })
  }

  public produits = []



}
