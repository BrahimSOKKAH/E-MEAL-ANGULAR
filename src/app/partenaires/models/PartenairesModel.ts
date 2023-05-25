interface PartenaireInterface {
    id: number;
    nom: string;
    role: string;
    email: string;
    password: string;
    siteWeb: string;
    logo: string;
    description: string;
  }
  
  class PartenaireModel implements PartenaireInterface {
    id!: number;
    nom!: string;
    role!: string;
    email!: string;
    password!: string;
    siteWeb!: string;
    logo!: string;
    description!: string;
  
    constructor(nom?: string, role?: string, email?: string, password?: string, siteWeb?: string, logo?: string, description?: string) {
      if (nom) this.nom = nom;
      if (role) this.role = role;
      if (email) this.email = email;
      if (password) this.password = password;
      if (siteWeb) this.siteWeb = siteWeb;
      if (logo) this.logo = logo;
      if (description) this.description = description;
    }
  
    toString = () => {
      return `Partenaire {id : ${this.id}, nom: ${this.nom}, role: ${this.role}, email: ${this.email}, password: ${this.password}, siteWeb: ${this.siteWeb}, logo: ${this.logo}, description: ${this.description}}`;
    }
  }
  
  export {PartenaireInterface, PartenaireModel};
  