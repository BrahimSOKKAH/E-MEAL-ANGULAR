import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuInterface } from '../models/MenusModel';

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  private URI = 'http://localhost:8080/menus'

  constructor(private http: HttpClient){}

  getMenus = (): Observable<MenuInterface[]> => {
    return this.http.get<MenuInterface[]>(`${this.URI}`)
  }
  getMenusById = (id: number):Observable<MenuInterface> => {
    return this.http.get<MenuInterface>(`${this.URI}/${id}`)
  }
  addMenu = (data: MenuInterface):Observable<MenuInterface> => {
    return this.http.post<MenuInterface>(`${this.URI}`, data);
  }

  delete = (id: number): Observable<void> => {
    return this.http.delete<void>(`${this.URI}/${id}`)
  }

  putMenu = (data: MenuInterface): Observable<MenuInterface> => {
      return this.http.put<MenuInterface>(`${this.URI}/${data.id}`, data)
  }

}
