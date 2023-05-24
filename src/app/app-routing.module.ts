import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { UpdateIngredientComponent } from './ingredients/layouts/update-ingredient/update-ingredient.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientQuantiteComponent } from './ingredient-quantite/ingredient-quantite.component';
import { RecettesComponent } from './recettes/recettes.component';
import { UpdateRecetteComponent } from './recettes/layouts/update-recette/update-recette.component';

const routes: Routes = [
  {path: 'ingredients', component: IngredientsComponent},
  {path: '', component: IngredientsComponent},
  {path: 'ingredients-quantites', component: IngredientQuantiteComponent},
  {path:'update-ingredient/:id', component: UpdateIngredientComponent}, 
  {path:'recettes', component: RecettesComponent},
  {path:'update-recette/', component: UpdateRecetteComponent},  
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
