import { IngredientsInterface } from "src/app/ingredients/models/IngredientsModel";
import { PartenaireInterface } from "src/app/partenaires/models/PartenairesModel";


enum GammePrix {
  E = "Prix économique",
  M = "Prix moyen",
  H = "Prix haut de gamme",
  L = "Prix de luxe"
}

enum Unite {
  G = "gramme",
  M = "millilitre",
  CS = "cuillère à soupe",
  CC = "cuillère à café",
  P = "piece"
}

interface ProduitsInterface {
  id: number,
  nom: string,
  quantite: number,
  unite: Unite,
  description?: string,
  categorie?: string,
  photo?: string,
  prix: number,
  gammePrix: GammePrix,
  partenaire: PartenaireInterface,
  ingredient: IngredientsInterface
}

class ProduitsModel implements ProduitsInterface {
  id!: number;
  nom!: string;
  quantite!: number;
  unite!: Unite;
  description?: string;
  categorie?: string;
  photo?: string;
  prix!: number;
  gammePrix!: GammePrix;
  partenaire!: PartenaireInterface;
  ingredient!: IngredientsInterface;

  constructor(nom?: string, quantite?: number, prix?: number) {
    if (nom) this.nom = nom;
    if (quantite) this.quantite = quantite;
    if (prix) this.prix = prix;
  }

  toString = (): string => {
    return `Produit : ${this.nom}, id: ${this.id}, quantite: ${this.quantite}, unite: ${this.unite}, prix: ${this.prix}`
  }
}

export {ProduitsInterface, ProduitsModel, GammePrix, Unite};