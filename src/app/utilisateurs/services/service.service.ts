import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/model/model.module';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private apiUrl = 'http://localhost:8080/utilisateurs';  // URL to your web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAllUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.apiUrl);
  }

  getUtilisateurById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.apiUrl}/${id}`);
  }

  createUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.apiUrl + "/signup", utilisateur, this.httpOptions);
  }

  updateUtilisateur(id: number, utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(`${this.apiUrl}/${id}`, utilisateur, this.httpOptions);
  }

  deleteUtilisateur(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.httpOptions);
  }

  getUtilisateurByEmail(email: string): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.apiUrl}/email?email=${email}`);
  }

  getUtilisateurByNom(nom: string): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.apiUrl}/nom?nom=${nom}`);
  }
}