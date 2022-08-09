import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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

  public LOGIN_URL = "https://127.0.0.1:8000/api/login_check"

  constructor(private http:HttpClient) { }
  
  public onSubmit()
  {
    return this.http.post(this.LOGIN_URL, this.form).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }

  ngOnInit(): void 
  {
  }

}
