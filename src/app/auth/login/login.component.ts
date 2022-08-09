import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form:any = {
    username: null,
    password: null
  }

  constructor(private authService :AuthService) { }
  
  public onSubmit()
  {
    this.authService.login(this.form).subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }

  ngOnInit(): void 
  {
  }

}
