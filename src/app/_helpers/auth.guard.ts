import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../shared/service/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate 
{
  constructor(
    private router:Router,
    private tokenService: TokenService
  ){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    if(this.tokenService.isLogged())
      return true
    // else if (this.tokenService.getUser(this.tokenService.getToken()).roles.includes("ROLE_CLIENT"))
    //   return this.router.navigate(["/catalogue"]);
    return this.router.navigate(["/auth/connexion"]);
  }
  
}
