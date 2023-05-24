import { Component, EventEmitter, Output } from '@angular/core';
import { MenuInterface, MenuModel } from '../../models/MenusModel';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent {
  @Output()
  data: EventEmitter<MenuInterface> = new EventEmitter(); // attribut qui sera envoyé au parent

  public submitted: boolean = false // boolean qui vérifie si le formulaire est soumis

  menuForm = this.fb.group({ // formulaire coté TS
    nom :['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]], // valeur par defaut, les validators
    descriptionMenu: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(250)]],
    dateDebut: ['', Validators.required],
    dateFin: ['', Validators.required],
  })

  public constructor(private fb: FormBuilder) {} // injection du formbuilder pour gérer nos formulaires

  public onSubmit = () => { // méthode qui se lance à la soumission du formulaire
    this.submitted = true // passe le formulaire en soumis
    
    if(this.menuForm.valid) { // dans le cas où le formulaire est valide
      // on fusionne les données du formulaire avec un objet MenuModel
      const menu: MenuInterface = Object.assign(new MenuModel(), this.menuForm.value) 
      this.data.emit(menu) // on envoie le formulaire au parent
      this.menuForm.reset()
      this.submitted = false
    }
  }
}