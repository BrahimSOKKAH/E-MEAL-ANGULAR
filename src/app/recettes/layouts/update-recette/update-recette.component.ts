import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecettesInterface, RecettesModel } from '../../models/model/RecettesModel';
import { Recetteservice } from '../../services/service.service';

@Component({
  selector: 'app-update-recette',
  templateUrl: './update-recette.component.html',
  styleUrls: ['./update-recette.component.css']
})
export class UpdateRecetteComponent implements OnInit {

  recettes: RecettesInterface = new RecettesModel()
  recettesForm: any;

  public submitted: boolean = false

  
  
  constructor(private route:ActivatedRoute, private service: Recetteservice, private fb: FormBuilder, private router: Router) {
    this.createForm() // je crée le formulaire à vide à la création du composant
  }
  
  createForm = () => {
    this.recettesForm = this.fb.group({ 
      nom :[this.recettes.nom, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    })
  }
  
    ngOnInit(): void {
      const id: number = this.getId()
      this.getRecettesFromService(id)
  }

  getId = () => {
    return this.route.snapshot.params['id'];
  }

  getRecettesFromService = (id: number) => { // méthode pour récupérer la Recettes a modifier
      const data = this.service.getRecettesById(id).subscribe({ // je souscris a l'observable dans le service
        next : (value) => { // quand je récupère la data du service
          console.log(value);
            this.recettes = value // j'affecte cette valeur à l'attribut recettes
            this.createForm() // je met à jour le formulaire avec les datas provenants du service
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
