import { Component, EventEmitter, Output } from '@angular/core';
import { ProduitsInterface, ProduitsModel } from '../../models/ProduitsModel';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent {
  @Output()
  data: EventEmitter<ProduitsInterface> = new EventEmitter(); 

  public submitted: boolean = false 

  produitsForm = this.fb.group({ 
    nom :['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]], 
    quantite: ['', Validators.required],
    unite: ['', Validators.required],
    description: [''],
    categorie: [''],
    photo: [''],
    prix: ['', Validators.required],
    gammePrix: ['', Validators.required],
    partenaire: ['', Validators.required],
    ingredient: ['', Validators.required]
  })

  public constructor(private fb: FormBuilder) {} 

  public onSubmit = () => { 
    this.submitted = true 
    
    if(this.produitsForm.valid) { 
      const produit: ProduitsInterface = Object.assign(new ProduitsModel(), this.produitsForm.value) 
      this.data.emit(produit) 
      this.produitsForm.reset()
      this.submitted = false
    }
  }
}
