import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {

  private baseUrl = 'http://localhost:8080/partenaires'; // replace with your actual Spring Boot server url

  constructor(private http: HttpClient) { }

  createPartenaire(partenaire: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/signup`, partenaire);
  }

  getPartenaireList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deletePartenaire(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getPartenaire(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updatePartenaire(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  findPartenaireByEmail(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/email?email=${email}`);
  }

  findPartenaireByNom(nom: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/nom?nom=${nom}`);
  }

}