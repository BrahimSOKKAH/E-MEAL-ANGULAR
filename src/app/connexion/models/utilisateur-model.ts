export interface Utilisateur {
    email: string;
    password: string;
}

export class UtilisateurModel implements Utilisateur {
    
    email!: string;
    password!: string;
        
    constructor(email?: string, password?: string) {
        
        if(email) this.email = email;
        if(password) this.password = password;
        
    }

    toString = (): string => {
        return `email: ${this.email}`;
    }
}