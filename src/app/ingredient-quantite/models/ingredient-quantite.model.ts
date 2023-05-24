import { IngredientsInterface } from "src/app/ingredients/models/IngredientsModel";

export enum Unite {
  G = "gramme",
  M = "millilitre",
  CS = "cuillère à soupe",
  CC = "cuillère à café",
  P = "piece"
}

export class IngredientQuantite {
  id!: number;
  ingredient!: IngredientsInterface;
  quantite!: number;
  unite!: Unite;
}
