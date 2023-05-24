import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RecettesInterface, RecettesModel } from '../../models/model/RecettesModel';
import { TypePlat, Difficulte} from '../../models/model/RecettesModel';

@Component({
  selector: 'app-add-recette',
  templateUrl: './add-recette.component.html',
  styleUrls: ['./add-recette.component.css']
})
export class AddRecetteComponent {
  @Output()
  data: EventEmitter<RecettesInterface> = new EventEmitter(); // attribut qui sera envoyé au parent

  public submitted: boolean = false // boolean qui vérifie si le formulaire est soumis
  typePlatOptions = Object.values(TypePlat); // options pour typePlat
  difficulteOptions = Object.values(Difficulte); // options pour niveauDeDifficulte

  recettesForm = this.fb.group({ // formulaire coté TS
    nom: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]], // valeur par defaut, les validators
    typePlat: ['', Validators.required],
    descriptionrecette: ['', Validators.required],
    instructionrecette: ['', Validators.required],
    tempsDeCuisson: ['', Validators.required],
    tempsDePreparation: ['', Validators.required],
    niveauDeDifficulte: ['', Validators.required],
    photoRecette: ['', Validators.required],
    typeDeCuisine: ['', Validators.required],
    noteMoyenne: ['', Validators.required],
    ingredientQuantite: ['', Validators.required]
  })

  public constructor(private fb: FormBuilder) {} // injection du formbuilder pour gérer nos formulaires

  public onSubmit = () => { // méthode qui se lance à la soumission du formulaire
    this.submitted = true // passe le formulaire en soumis
    
    if(this.recettesForm.valid) { // dans le cas où le formulaire est valide
      // on fusionne les données du formulaire avec un objet RecettesModel
      const Recettes: RecettesInterface = Object.assign(new RecettesModel(), this.recettesForm.value) 
      this.data.emit(Recettes) // on envoie le formulaire au parent
      this.recettesForm.reset()
      this.submitted = false
    }
  }
}
