import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IngredientsInterface } from '../models/IngredientsModel';

@Injectable({
  providedIn: 'root'
})

export class IngredientService {

  private URI = 'http://localhost:8080/ingredients'

  constructor(private http: HttpClient){}

  getIngredients = (): Observable<IngredientsInterface[]> => {
    return this.http.get<IngredientsInterface[]>(`${this.URI}`)
  }
  getIngredientsById = (id: number):Observable<IngredientsInterface> => {
    return this.http.get<IngredientsInterface>(`${this.URI}/${id}`)
  }
  addIngredient = (data: IngredientsInterface):Observable<IngredientsInterface> => {
    return this.http.post<IngredientsInterface>(`${this.URI}`, data);
  }

  delete = (id: number): Observable<void> => {
    return this.http.delete<void>(`${this.URI}/${id}`)
  }

  putIngredient = (data: IngredientsInterface): Observable<IngredientsInterface> => {
      return this.http.put<IngredientsInterface>(`${this.URI}/${data.id}`, data)
  }

}
