import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router:Router) { }

  saveToken(token: string){  localStorage.setItem("token", token);    }

  getUser(token: string){  return JSON.parse(atob(token.split(".")[1]))}

  // getUserId(token: string){  return this.getUser(token).id  }

  isLogged(): boolean
  {
    let token = localStorage.getItem("token")
    return !!token
  }

  clearToken()
  {
    localStorage.removeItem("token");
    this.router.navigate(["/auth/connexion"])
  }

  clearTokenExpired()
  {
    localStorage.removeItem("token");
    this.router.navigate(["/auth/connexion"])
  }

  getToken(): string | null{  return localStorage.getItem("token") }
}
