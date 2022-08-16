import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICredential, IUser } from 'src/app/shared/interface/interfaces';
import { AuthService } from 'src/app/shared/service/auth.service';
import { TokenService } from 'src/app/shared/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: ICredential = {
    email: '',
    password: ''
  }

  public user: IUser

  public erroMessage = ""


  constructor(private authService :AuthService, private tokenService:TokenService, private retour:Router) { }
  
  ngOnInit(): void {}
  
  public hasRole(role: string){  return this.user.roles.includes(role as never); }
  
  public onSubmit(){  
    this.authService.login(this.form).catch((err) => this.erroMessage = err);
   
  }


}
