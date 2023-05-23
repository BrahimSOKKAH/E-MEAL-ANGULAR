import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MiniatureRecetteComponent } from './miniature-recette/miniature-recette.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientQuantiteComponent } from './ingredient-quantite/ingredient-quantite.component';
import { ListesCoursesComponent } from './listes-courses/listes-courses.component';
import { ListeCoursesProduitsComponent } from './liste-courses-produits/liste-courses-produits.component';
import { MenusComponent } from './menus/menus.component';
import { NoteRecetteComponent } from './note-recette/note-recette.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { PlatsComponent } from './plats/plats.component';
import { ProduitsComponent } from './produits/produits.component';
import { RecettesComponent } from './recettes/recettes.component';
import { RecettesFavoritesComponent } from './recettes-favorites/recettes-favorites.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    MiniatureRecetteComponent,
    IngredientsComponent,
    IngredientQuantiteComponent,
    ListesCoursesComponent,
    ListeCoursesProduitsComponent,
    MenusComponent,
    NoteRecetteComponent,
    PartenairesComponent,
    PlatsComponent,
    ProduitsComponent,
    RecettesComponent,
    RecettesFavoritesComponent,
    UtilisateursComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
