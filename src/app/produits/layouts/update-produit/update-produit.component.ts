import { Component, OnInit } from '@angular/core';
import { ProduitsInterface, ProduitsModel } from '../../models/ProduitsModel';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../../services/service.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {

  produit: ProduitsInterface = new ProduitsModel()
  produitsForm: any;

  public submitted: boolean = false

  constructor(private route: ActivatedRoute, private service: ProduitService, private fb: FormBuilder, private router: Router) {
    this.createForm() // je crée le formulaire à vide à la création du composant
  }
  
  createForm = () => {
    this.produitsForm = this.fb.group({ 
      nom: [this.produit.nom, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      quantite: [this.produit.quantite, Validators.required],
      unite: [this.produit.unite, Validators.required],
      description: [this.produit.description],
      categorie: [this.produit.categorie],
      photo: [this.produit.photo],
      prix: [this.produit.prix, Validators.required],
      gammePrix: [this.produit.gammePrix, Validators.required],
      partenaire: [this.produit.partenaire, Validators.required],
      ingredient: [this.produit.ingredient, Validators.required]
    })
  }
  
  ngOnInit(): void {
    const id: number = this.getId()
    this.getProduitFromService(id)
  }

  getId = () => {
    return this.route.snapshot.params['id'];
  }

  getProduitFromService = (id: number) => { 
    const data = this.service.getProduitById(id).subscribe({ 
      next : (value) => { 
        console.log(value);
        this.produit = value 
        this.createForm() 
      },
    })
  }

  public onSubmit = () => { 
    this.submitted = true
    
    if(this.produitsForm.valid) { 
      const data =  Object.assign(this.produit, this.produitsForm.value)
      this.service.putProduit(data).subscribe({
        next: (data: ProduitsInterface) => {
          this.router.navigate(['']); 
        },
        error(err) {
            console.error(err);
        },
      })      
    }
  }
}