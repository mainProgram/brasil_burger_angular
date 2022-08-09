import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICredential, IToken } from '../interface/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  public login(body : ICredential) : Observable<IToken>
  {
    return this.http.post<IToken>(environment.LOGIN_URL, body)
  }
}
