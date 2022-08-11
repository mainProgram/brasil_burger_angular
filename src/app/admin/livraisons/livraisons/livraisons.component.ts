import { Component, OnInit } from '@angular/core';
import { LivraisonService } from 'src/app/shared/service/livraison.service';

@Component({
  selector: 'app-livraisons',
  templateUrl: './livraisons.component.html',
  styleUrls: ['./livraisons.component.scss']
})
export class LivraisonsComponent implements OnInit {

  constructor(private livraisonService: LivraisonService) { }

  public livraisons : any

  ngOnInit(): void 
  {
    this.livraisonService.getAllLivraisons().subscribe({
      next: data => { this.livraisons = data}
    })
  }

}
