import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IngredientQuantite } from '../models/ingredient-quantite.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientQuantiteService {

  private url = 'http://localhost:8080/ingredients_quantites';  // URL de vers API

  constructor(private http: HttpClient) { }

  getIngredientQuantites(): Observable<IngredientQuantite[]> {
    return this.http.get<IngredientQuantite[]>(this.url)
  }

  addIngredientQuantite(ingredientQuantite: IngredientQuantite): Observable<IngredientQuantite> {
    return this.http.post<IngredientQuantite>(this.url, ingredientQuantite);
  }

  updateIngredientQuantite(id: number, ingredientQuantite: IngredientQuantite): Observable<IngredientQuantite> {
    const url = `${this.url}/${id}`;
    return this.http.put<IngredientQuantite>(url, ingredientQuantite);
  }

  deleteIngredientQuantite(id: number): Observable<{}> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url);
  }
}
