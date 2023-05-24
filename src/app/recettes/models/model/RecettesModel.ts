import { IngredientQuantite } from "src/app/ingredient-quantite/models/ingredient-quantite.model";


export enum TypePlat {
    E = 'Entrée',
    P = 'Plat principale',
    A = 'Accompagnement',
    D = 'Dessert'
  }
  
  export enum Difficulte {
    F = 'Facile',
    M = 'Moyen',
    D = 'Difficile'
  }



interface RecettesInterface {
    
    nom: string,
    id: number,
    typePlat: TypePlat, 
    descriptionRecette: string,
    instructionRecette: string,
    tempsDeCuisson : number,
    tempsDePreparation: number,
    niveauDeDifficulte: Difficulte,
    photoRecette: string,
    typeDeCuisine: string,
    noteMoyenne: number,
    ingredientQuantite: IngredientQuantite[];


}

class RecettesModel implements RecettesInterface {
    
    nom!: string;
    id!: number;
    typePlat!: TypePlat; 
    descriptionRecette!: string;
    instructionRecette!: string;
    tempsDeCuisson !: number;
    tempsDePreparation!: number;
    niveauDeDifficulte!: Difficulte;
    photoRecette!: string;
    typeDeCuisine!: string;
    noteMoyenne!: number;
    ingredientQuantite!: IngredientQuantite[];

        
    constructor(nom?: string, descriptionRecette?: string,instructionRecette?: string, tempsDePreparation?: number, tempsDeCuisson?: number, nombrePersonnes?: number, typePlat?: TypePlat, niveauDeDifficulte?: Difficulte, ingredientQuantite?: IngredientQuantite[]) {
        if (nom) this.nom = nom;
        if (descriptionRecette) this.descriptionRecette = descriptionRecette;
        if (instructionRecette) this.instructionRecette = instructionRecette;
        if (tempsDePreparation) this.tempsDePreparation = tempsDePreparation;
        if (tempsDeCuisson) this.tempsDeCuisson = tempsDeCuisson;
        if (typePlat) this.typePlat = typePlat;
        if (niveauDeDifficulte) this.niveauDeDifficulte = niveauDeDifficulte;
        if (ingredientQuantite) this.ingredientQuantite = ingredientQuantite;
      }
    toString = (): string => {
        return `nom : ${this.nom}, id: ${this.id}, description recette: ${this.descriptionRecette}, temps de préparation: ${this.tempsDePreparation}, temps de cuisson: ${this.tempsDeCuisson}, type de plat: ${this.typePlat}, difficulté: ${this.niveauDeDifficulte}, quantités d'ingrédients: ${this.ingredientQuantite.map(ingredientQuantite => ingredientQuantite.toString()).join(", ")}`;
      }
}

export {RecettesInterface, RecettesModel}