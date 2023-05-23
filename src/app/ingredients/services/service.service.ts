import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private URI = 'http://localhost:3000/todos'

  constructor(private http: HttpClient){}

  getTodos = (): Observable<TodoInterface[]> => {
    return this.http.get<TodoInterface[]>(`${this.URI}`)
  }

  addTodo = (data: TodoInterface):Observable<TodoInterface> => {
    return this.http.post<TodoInterface>(`${this.URI}`, data);
  }

  delete = (id: number): Observable<void> => {
    return this.http.delete<void>(`${this.URI}/${id}`)
  }

  patchChecked = (id: number, data:{checked: boolean}) => {
    return this.http.patch<TodoInterface>(`${this.URI}/${id}`, data)
  }

}
