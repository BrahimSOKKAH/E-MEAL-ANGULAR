import { Component, OnInit } from '@angular/core';
import { IngredientsInterface, IngredientsModel } from '../../models/IngredientsModel';
import { FormBuilder, Validators } from '@angular/forms';
import { IngredientService } from '../../services/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-ingredient',
  templateUrl: './update-ingredient.component.html',
  //styleUrls: ['./update-ingredient.component.css']
})
export class UpdateIngredientComponent implements OnInit {

  ingredients: IngredientsInterface = new IngredientsModel()
  ingredientsForm: any;

  public submitted: boolean = false

  
  
  constructor(private route:ActivatedRoute, private service: IngredientService, private fb: FormBuilder, private router: Router) {
    this.createForm() // je crée le formulaire à vide à la création du composant
  }
  
  createForm = () => {
    this.ingredientsForm = this.fb.group({ 
      nom :[this.ingredients.nom, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    })
  }
  
    ngOnInit(): void {
      const id: number = this.getId()
      this.getIngredientsFromService(id)
  }

  getId = () => {
    return this.route.snapshot.params['id'];
  }

  getIngredientsFromService = (id: number) => { // méthode pour récupérer la Ingredients a modifier
      const data = this.service.getIngredientsById(id).subscribe({ // je souscris a l'observable dans le service
        next : (value) => { // quand je récupère la data du service
          console.log(value);
            this.ingredients = value // j'affecte cette valeur à l'attribut ingredients
            this.createForm() // je met à jour le formulaire avec les datas provenants du service
        },
      })
  }

  public onSubmit = () => { 
    this.submitted = true
    
    if(this.ingredientsForm.valid) { 
      const data =  Object.assign(this.ingredients, this.ingredientsForm.value)
      this.service.putIngredient(data).subscribe({
        next: (data: IngredientsInterface) => {
          this.router.navigate(['']); 
        },
        error(err) {
            console.error(err);
        },
      })      
    }
  }

}
