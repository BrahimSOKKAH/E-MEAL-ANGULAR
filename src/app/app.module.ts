import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MiniatureRecetteComponent } from './miniature-recette/miniature-recette.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientQuantiteComponent } from './ingredient-quantite/ingredient-quantite.component';
import { ListesCoursesComponent } from './listes-courses/listes-courses.component';
import { MenusComponent } from './menus/menus.component';
import { NoteRecetteComponent } from './note-recette/note-recette.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { PlatsComponent } from './plats/plats.component';
import { ProduitsComponent } from './produits/produits.component';
import { RecettesComponent } from './recettes/recettes.component';
import { RecettesFavoritesComponent } from './recettes-favorites/recettes-favorites.component';
import { DisplayComponent } from './ingredients/display/display.component';
import { AddIngredientComponent } from './ingredients/layouts/add-ingredient/add-ingredient.component';
import { UpdateIngredientComponent } from './ingredients/layouts/update-ingredient/update-ingredient.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    MiniatureRecetteComponent,
    IngredientsComponent,
    IngredientQuantiteComponent,
    ListesCoursesComponent,
    MenusComponent,
    NoteRecetteComponent,
    PartenairesComponent,
    PlatsComponent,
    ProduitsComponent,
    RecettesComponent,
    RecettesFavoritesComponent,
    DisplayComponent,
    AddIngredientComponent,
    UpdateIngredientComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
