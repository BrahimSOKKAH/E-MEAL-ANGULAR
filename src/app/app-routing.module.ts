import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateIngredientComponent } from './ingredients/layouts/update-ingredient/update-ingredient.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { RecettesComponent } from './recettes/recettes.component';
import { UpdateRecetteComponent } from './recettes/layouts/update-recette/update-recette.component';
import { MenusComponent } from './menus/menus.component';
import { EMealComponent } from './e-meal/e-meal.component';

const routes: Routes = [
  {path:'', component: EMealComponent},
  {path:'e-meal', component: EMealComponent},
  {path: 'ingredients', component: IngredientsComponent},
  {path:'ingredients/update/:id', component: UpdateIngredientComponent}, 
  {path:'recettes', component: RecettesComponent},
  {path:'menus', component: MenusComponent},
  {path:'recettes/update/:id', component: UpdateRecetteComponent},
  {path:'menus/update/:id', component: UpdateRecetteComponent},
  {path:'produits/update/:id', component: UpdateRecetteComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
