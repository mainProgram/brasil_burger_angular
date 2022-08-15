import { Component, OnInit } from '@angular/core';
import { ICredential } from 'src/app/shared/interface/interfaces';
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

  constructor(private authService :AuthService, private tokenService:TokenService) { }
  
  public onSubmit()
  {
    this.authService.login(this.form)
  }

  ngOnInit(): void 
  {
  }

}
