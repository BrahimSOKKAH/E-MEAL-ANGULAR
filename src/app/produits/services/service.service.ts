import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProduitsInterface } from '../models/ProduitsModel';

@Injectable({
  providedIn: 'root'
})

export class ProduitService {

  private URI = 'http://localhost:8080/produits'

  constructor(private http: HttpClient){}

  getProduits = (): Observable<ProduitsInterface[]> => {
    return this.http.get<ProduitsInterface[]>(`${this.URI}`)
  }
  getProduitById = (id: number):Observable<ProduitsInterface> => {
    return this.http.get<ProduitsInterface>(`${this.URI}/${id}`)
  }
  addProduit = (data: ProduitsInterface):Observable<ProduitsInterface> => {
    return this.http.post<ProduitsInterface>(`${this.URI}`, data);
  }

  delete = (id: number): Observable<void> => {
    return this.http.delete<void>(`${this.URI}/${id}`)
  }

  putProduit = (data: ProduitsInterface): Observable<ProduitsInterface> => {
      return this.http.put<ProduitsInterface>(`${this.URI}/${data.id}`, data)
  }

}

