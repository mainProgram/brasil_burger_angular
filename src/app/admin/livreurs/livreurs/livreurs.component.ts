import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivraisonService } from 'src/app/shared/service/livraison.service';
import { IUser} from '../../../shared/interface/interfaces' ;

@Component({
  selector: 'app-livreurs',
  templateUrl: './livreurs.component.html',
  styleUrls: ['./livreurs.component.scss']
})
export class LivreursComponent implements OnInit {

  constructor(private livreursService: LivraisonService, private retour:Router) { }

  public livreurs : IUser[]

  ngOnInit(): void {
    this.livreursService.getLivreurs().subscribe({
      next: data => {  this.livreurs = data }
    })
  }

  public setLivreurDisponible(id: number){
    this.livreursService.setLivreurDisponible(id).subscribe({
      next: (data) => {  this.retour.navigate(["/admin/livreurs/", data.id])}
    })  
  }

}
