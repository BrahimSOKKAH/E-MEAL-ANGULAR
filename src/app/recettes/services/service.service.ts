import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecettesInterface } from '../models/model/RecettesModel';


@Injectable({
  providedIn: 'root'
})

export class Recetteservice {

  private URI = 'http://localhost:8080/recettes'

  constructor(private http: HttpClient){}

  getRecettes = (): Observable<RecettesInterface[]> => {
    return this.http.get<RecettesInterface[]>(`${this.URI}`)
  }
  getRecettesById = (id: number):Observable<RecettesInterface> => {
    return this.http.get<RecettesInterface>(`${this.URI}/${id}`)
  }
  addRecettes = (data: RecettesInterface):Observable<RecettesInterface> => {
    return this.http.post<RecettesInterface>(`${this.URI}`, data);
  }

  delete = (id: number): Observable<void> => {
    return this.http.delete<void>(`${this.URI}/${id}`)
  }

  putRecettes = (data: RecettesInterface): Observable<RecettesInterface> => {
      return this.http.put<RecettesInterface>(`${this.URI}/${data.id}`, data)
  }

}
