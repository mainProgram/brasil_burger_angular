import { Component, Input, OnInit } from '@angular/core';
import { PanierService } from 'src/app/service/panier.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private panierService: PanierService) { }

  taillePanier: number = 0

  ngOnInit(): void 
  {
    this.panierService.getPanier().subscribe(
      resultat => {
        this.taillePanier = resultat.length
      }
    )
  }


}
