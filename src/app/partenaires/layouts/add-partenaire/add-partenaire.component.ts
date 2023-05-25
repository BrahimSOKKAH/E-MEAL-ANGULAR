import { Component, EventEmitter, Output } from '@angular/core';
import { PartenaireInterface, PartenaireModel } from '../../models/PartenairesModel';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-partenaire',
  templateUrl: './add-partenaire.component.html',
  //styleUrls: ['./add-partenaire.component.css']
})
export class AddPartenaireComponent {
  @Output()
  data: EventEmitter<PartenaireInterface> = new EventEmitter(); // attribut qui sera envoyé au parent

  public submitted: boolean = false // boolean qui vérifie si le formulaire est soumis

  partenaireForm = this.fb.group({ // formulaire coté TS
    nom: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]], // valeur par defaut, les validators
    email: ['', [Validators.required, Validators.email, Validators.maxLength(45)]],
    password: ['', [Validators.required]],
    siteWeb: ['', [Validators.maxLength(50)]],
    logo: ['', [Validators.maxLength(100)]],
    description: ['', [Validators.maxLength(250)]]
  })

  public constructor(private fb: FormBuilder) {} // injection du formbuilder pour gérer nos formulaires

  public onSubmit = () => { // méthode qui se lance à la soumission du formulaire
    this.submitted = true // passe le formulaire en soumis
    
    if(this.partenaireForm.valid) { // dans le cas ou le formulaire est valide
      // on fusionne les données du formulaire avec un objet PartenairesModel
      const partenaire: PartenaireInterface = Object.assign(new PartenaireModel(), this.partenaireForm.value) 
      this.data.emit(partenaire) // on envoie le formulaire au parent
      this.partenaireForm.reset()
      this.submitted = false
    }
  }
}
