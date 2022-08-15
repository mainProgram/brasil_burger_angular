import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {

  constructor(private authService: AuthService, private retour:Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
            
    const isAuthorized =  (!! this.authService.user) ? this.authService.user.roles.includes(route.data.role as never) : false;

    if(!isAuthorized)
      this.retour.navigate(["/auth/connexion"])
    
    return isAuthorized
  }
  
}
