import { Utilisateur } from "src/app/connexion/models/utilisateur-model";

interface MenuInterface {
    id: number;
    nom: string;
    descriptionMenu: string;
    dateDebut: string; // Date représentée sous forme de string
    dateFin: string; // Date représentée sous forme de string
    utilisateur: Utilisateur; // Type to be replaced with appropriate User model
    //plats: Plats[]; // Type to be replaced with appropriate Dish model
}

class MenuModel implements MenuInterface {
    id!: number;
    nom!: string;
    descriptionMenu!: string;
    dateDebut!: string;
    dateFin!: string;
    utilisateur!:Utilisateur ; // Initialize with appropriate User model
    //plats!: Plats[]; // Initialize with appropriate Dish model

    constructor(nom?: string) {
        if (nom) this.nom = nom;
    }

    toString = () => {
        return `nom : ${this.nom}, id: ${this.id}, descriptionMenu: ${this.descriptionMenu}, dateDebut: ${this.dateDebut}, dateFin: ${this.dateFin}}`;
    }
}

export {MenuInterface, MenuModel}