import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { PanierService } from 'src/app/shared/service/panier.service';
import { TokenService } from 'src/app/shared/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private panierService: PanierService, private tokenService: TokenService, private http:HttpClient) { }

  taillePanier: number = 0

  ngOnInit(): void 
  {
    this.panierService.getPanier().subscribe(
      resultat => {
        this.taillePanier = resultat.length
      }
    )

    this.http.get("https://127.0.0.1:8000/api/livraisons").subscribe()
  }

  public logout(): void
  {
    this.tokenService.clearToken()
  }

}
