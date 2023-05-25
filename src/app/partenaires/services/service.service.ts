import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PartenaireInterface } from '../models/PartenairesModel';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {

  private URI = 'http://localhost:8080/partenaires'; // replace with your actual Spring Boot server url

  constructor(private http: HttpClient) { }

  addPartenaire = (data: PartenaireInterface):Observable<PartenaireInterface> => {
    return this.http.post<PartenaireInterface>(`${this.URI}`, data);
  }


  getPartenaires = (): Observable<PartenaireInterface[]> => {
    return this.http.get<PartenaireInterface[]>(`${this.URI}`)
  }

  deletePartenaire(id: number): Observable<void> {
    return this.http.delete<void>(`${this.URI}/${id}`);
  }

  getPartenaire(id: number): Observable<PartenaireInterface> {
    return this.http.get<PartenaireInterface>(`${this.URI}/${id}`);
  }

  putPartenaire = (data: PartenaireInterface): Observable<PartenaireInterface> => {
    return this.http.put<PartenaireInterface>(`${this.URI}/${data.id}`, data)
}

  findPartenaireByEmail(email: string): Observable<PartenaireInterface> {
    return this.http.get<PartenaireInterface>(`${this.URI}/email?email=${email}`);
  }

  findPartenaireByNom(nom: string): Observable<PartenaireInterface> {
    return this.http.get<PartenaireInterface>(`${this.URI}/nom?nom=${nom}`);
  }

}