import { Component, OnInit } from '@angular/core';
import { IngredientQuantite } from './models/ingredient-quantite.model';
import { IngredientQuantiteService } from './services/ingredient-quantite.service';


@Component({
  selector: 'app-ingredient-quantite',
  templateUrl: './ingredient-quantite.component.html',
  styleUrls: ['./ingredient-quantite.component.css']
})
export class IngredientQuantiteComponent implements OnInit {

  ingredientQuantites: IngredientQuantite[] = [];
  selectedIngredientQuantite: IngredientQuantite = new IngredientQuantite();

  constructor(private ingredientQuantiteService: IngredientQuantiteService) { }

  ngOnInit(): void {
    this.getIngredientQuantites();
  }

  getIngredientQuantites(): void {
    this.ingredientQuantiteService.getIngredientQuantites()
      .subscribe(ingredientQuantites => this.ingredientQuantites = ingredientQuantites);
  }

  addIngredientQuantite(ingredientQuantite: IngredientQuantite): void {
    this.ingredientQuantiteService.addIngredientQuantite(ingredientQuantite)
      .subscribe(newIngredientQuantite => {
        this.ingredientQuantites.push(newIngredientQuantite);
        this.selectedIngredientQuantite = new IngredientQuantite();
      });
  }

  updateIngredientQuantite(ingredientQuantite: IngredientQuantite): void {
    this.ingredientQuantiteService.updateIngredientQuantite(ingredientQuantite.id, ingredientQuantite)
      .subscribe(updatedIngredientQuantite => {
        const idx = this.ingredientQuantites.findIndex(iq => iq.id === updatedIngredientQuantite.id);
        this.ingredientQuantites[idx] = updatedIngredientQuantite;
        this.selectedIngredientQuantite = new IngredientQuantite();
      });
  }

  deleteIngredientQuantite(id: number): void {
    this.ingredientQuantiteService.deleteIngredientQuantite(id)
      .subscribe(_ => {
        this.ingredientQuantites = this.ingredientQuantites.filter(iq => iq.id !== id);
      });
  }
}