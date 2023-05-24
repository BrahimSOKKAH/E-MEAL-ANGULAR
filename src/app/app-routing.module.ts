import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateIngredientComponent } from './ingredients/layouts/update-ingredient/update-ingredient.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { RecettesComponent } from './recettes/recettes.component';
import { UpdateRecetteComponent } from './recettes/layouts/update-recette/update-recette.component';

const routes: Routes = [
  {path: 'ingredients', component: IngredientsComponent},
  {path:'ingredients/update/:id', component: UpdateIngredientComponent}, 
  {path:'recettes', component: RecettesComponent},
  {path:'recettes/update/:id', component: UpdateRecetteComponent},  
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
