import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {

  constructor(private http:HttpClient) { }

  public getLivreurs(){  return this.http.get(environment.LIVREURS_URL) }

  public getLivreursDispo(){  return this.http.get(environment.LIVREURS_URL+"?isDisponible=1") }

  public creer(body){  return this.http.post(environment.LIVRAISONS_URL, body) }

  public getAllLivraisons(){  return this.http.get(environment.LIVRAISONS_URL) }

  public getDetailLivraison(id){  return this.http.get(environment.LIVRAISONS_URL+"/"+id) }
}
