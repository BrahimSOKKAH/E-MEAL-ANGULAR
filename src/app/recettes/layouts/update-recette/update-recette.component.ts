import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecettesInterface, RecettesModel } from '../../models/model/RecettesModel';
import { Recetteservice } from '../../services/service.service';
import { TypePlat, Difficulte} from '../../models/model/RecettesModel';

@Component({
  selector: 'app-update-recette',
  templateUrl: './update-recette.component.html',
  styleUrls: ['./update-recette.component.css']
})
export class UpdateRecetteComponent implements OnInit {

  recettes: RecettesInterface = new RecettesModel()
  recettesForm: any;

  public submitted: boolean = false
  typePlatOptions = Object.values(TypePlat); // options pour typePlat
  difficulteOptions = Object.values(Difficulte); // options pour niveauDeDifficulte

  constructor(private route:ActivatedRoute, private service: Recetteservice, private fb: FormBuilder, private router: Router) {
    this.createForm() // je crée le formulaire à vide à la création du composant
  }

  createForm = () => {
    this.recettesForm = this.fb.group({
      nom: [this.recettes.nom, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      typePlat: [this.recettes.typePlat, Validators.required],
      descriptionrecette: [this.recettes.descriptionRecette, Validators.required],
      instructionrecette: [this.recettes.instructionRecette, Validators.required],
      tempsDeCuisson: [this.recettes.tempsDeCuisson, Validators.required],
      tempsDePreparation: [this.recettes.tempsDePreparation, Validators.required],
      niveauDeDifficulte: [this.recettes.niveauDeDifficulte, Validators.required],
      photoRecette: [this.recettes.photoRecette, Validators.required],
      typeDeCuisine: [this.recettes.typeDeCuisine, Validators.required],
      noteMoyenne: [this.recettes.noteMoyenne, Validators.required],
      ingredientQuantite: [this.recettes.ingredientQuantite, Validators.required]
    })
  }

  ngOnInit(): void {
    const id: number = this.getId()
    this.getRecettesFromService(id)
  }

  getId = () => {
    return this.route.snapshot.params['id'];
  }

  getRecettesFromService = (id: number) => { 
    const data = this.service.getRecettesById(id).subscribe({
      next : (value) => {
        console.log(value);
        this.recettes = value 
        this.createForm() // update form values with recette
      },
    })
  }

  public onSubmit = () => { 
    this.submitted = true
    
    if(this.recettesForm.valid) { 
      const data =  Object.assign(this.recettes, this.recettesForm.value)
      this.service.putRecettes(data).subscribe({
        next: (data: RecettesInterface) => {
          this.router.navigate(['']); 
        },
        error(err) {
            console.error(err);
        },
      })      
    }
  }

}
