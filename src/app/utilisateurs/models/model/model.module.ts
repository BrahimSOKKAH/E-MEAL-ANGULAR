export interface Utilisateur {
  id: number;
  nom: string;
  prenom: string;
  role: string;
  email: string;
  password: string;
}

export class UtilisateurModel implements Utilisateur {
  id!: number;
  nom!: string;
  prenom!: string;
  role!: string;
  email!: string;
  password!: string;
      
  constructor(nom?: string, prenom?: string, role?: string, email?: string, password?: string, id?: number) {
      if (nom) this.nom = nom;
      if(prenom) this.prenom = prenom;
      if(role) this.role = role;
      if(email) this.email = email;
      if(password) this.password = password;
      if(id) this.id = id;
  }

  toString = (): string => {
      return `nom : ${this.nom}, prenom : ${this.prenom}, id: ${this.id}, email: ${this.email}, role: ${this.role}`;
  }
}