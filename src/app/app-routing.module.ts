import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { UpdateIngredientComponent } from './ingredients/layouts/update-ingredient/update-ingredient.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientQuantiteComponent } from './ingredient-quantite/ingredient-quantite.component';

const routes: Routes = [
  {path: 'ingredients', component: IngredientsComponent},
  {path: '', component: IngredientsComponent},
  {path: 'ingredients-quantites', component: IngredientQuantiteComponent},
  {path:'update/:id', component: UpdateIngredientComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
