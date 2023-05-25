// partenaire.model.ts
export class Partenaire {
    id!: number;
    nom!: string;
    role: string;
    email!: string;
    password!: string;
    siteWeb!: string;
    logo!: string;
    description!: string;

    constructor() {
        this.role = "ROLE_PARTNER";
    }
}