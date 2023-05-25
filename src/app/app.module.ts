import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { MenusComponent } from './menus/menus.component';
import { RecettesComponent } from './recettes/recettes.component';
import { AddIngredientComponent } from './ingredients/layouts/add-ingredient/add-ingredient.component';
import { UpdateIngredientComponent } from './ingredients/layouts/update-ingredient/update-ingredient.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateRecetteComponent } from './recettes/layouts/update-recette/update-recette.component';
import { AddRecetteComponent } from './recettes/layouts/add-recette/add-recette.component';
import { RouterModule } from '@angular/router';
import { DisplayRecetteComponent } from './recettes/display/display-recettes.component';
import { UpdateMenuComponent } from './menus/layouts/update-menu/update-menu.component';
import { DisplayIgredientComponent } from './ingredients/display/display-ingredients.component';
import { AddMenuComponent } from './menus/layouts/add-menu/add-menu.component';
import { DisplayMenusComponent } from './menus/display/display-menus.component';
import { DisplayProduitsComponent } from './produits/display/display-produits.component';
import { EMealComponent } from './e-meal/e-meal.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    IngredientsComponent,
    //IngredientQuantiteComponent,
    //ListesCoursesComponent,
    MenusComponent,
    //NoteRecetteComponent,
    //PartenairesComponent,
    //PlatsComponent,
    //ProduitsComponent,
    RecettesComponent,
    //RecettesFavoritesComponent,
    DisplayIgredientComponent,
    AddIngredientComponent,
    UpdateIngredientComponent,
    AddRecetteComponent,
    UpdateRecetteComponent,
    DisplayRecetteComponent,
    DisplayMenusComponent,
    AddMenuComponent,
    UpdateMenuComponent,
    DisplayProduitsComponent,   
    EMealComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }