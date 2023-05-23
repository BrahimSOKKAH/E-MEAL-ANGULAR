import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../connexion/models/utilisateur-model';
import { UtilisateurService } from './services/service.service';


@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateurComponent implements OnInit {
  utilisateurs: Utilisateur[] = [];

  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.getUtilisateurs();
  }

  getUtilisateurs(): void {
    this.utilisateurService.getAllUtilisateurs()
      .subscribe(utilisateurs => this.utilisateurs = utilisateurs);
  }

  add(nom: string, email: string): void {
    nom = nom.trim();
    email = email.trim();
    if (!nom || !email) { return; }
    this.utilisateurService.createUtilisateur({ 'nom', 'email' } as Utilisateur)
      .subscribe(utilisateur => {
        this.utilisateurs.push(utilisateur);
      });
  }

  delete(utilisateur: Utilisateur): void {
    this.utilisateurs = this.utilisateurs.filter(h => h !== utilisateur);
    this.utilisateurService.deleteUtilisateur(utilisateur.id).subscribe();
  }
}
