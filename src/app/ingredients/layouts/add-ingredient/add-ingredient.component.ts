import { Component, EventEmitter, Output } from '@angular/core';
import { IngredientsInterface, IngredientsModel } from '../../models/IngredientsModel';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  //styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent {
  @Output()
  data: EventEmitter<IngredientsInterface> = new EventEmitter(); // attribut qui sera envoyé au parent

  public submitted: boolean = false // boolean qui vérifie si le formulaire est soumis

  ingredientsForm = this.fb.group({ // formulaire coté TS
    nom :['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]], // valeur par defaut, les validators
  })

  public constructor(private fb: FormBuilder) {} // injection du formbuilder pour gérer nos formulaires

  public onSubmit = () => { // méthode qui se lance à la soumission du formulaire
    this.submitted = true // passe le formulaire en soumis
    
    if(this.ingredientsForm.valid) { // dans le cas ou le formulaire est valide
      // on fusionne les données du formulaire avec un objet ingredientsModel
      const ingredients: IngredientsInterface = Object.assign(new IngredientsModel(), this.ingredientsForm.value) 
      this.data.emit(ingredients) // on envoie le formulaire au parent
      this.ingredientsForm.reset()
      this.submitted = false
    }
  }
}