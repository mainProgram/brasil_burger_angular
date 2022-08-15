import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/shared/service/token.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private tokenService: TokenService, private router:Router) { }

  isLogged : boolean

  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged()
  }

  public logout(): void {  
    this.tokenService.clearToken() 
    this.router.navigate(["/auth/connexion"]).then(() => { window.location.reload() })
  }


}
