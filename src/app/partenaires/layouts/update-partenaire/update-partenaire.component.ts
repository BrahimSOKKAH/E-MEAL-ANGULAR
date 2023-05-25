import { Component, OnInit } from '@angular/core';
import { PartenaireInterface, PartenaireModel } from '../../models/PartenairesModel';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PartenaireService } from '../../services/service.service';

@Component({
  selector: 'app-update-partenaire',
  templateUrl: './update-partenaire.component.html',
  styleUrls: ['./update-partenaire.component.css']
})
export class UpdatePartenaireComponent implements OnInit {

  partenaire: PartenaireInterface = new PartenaireModel()
  partenaireForm: any;

  public submitted: boolean = false
  
  constructor(private route:ActivatedRoute, private service: PartenaireService, private fb: FormBuilder, private router: Router) {
    this.createForm() // je crée le formulaire à vide à la création du composant
  }
  
  createForm = () => {
    this.partenaireForm = this.fb.group({ 
      nom: [this.partenaire.nom, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: [this.partenaire.email, [Validators.required, Validators.email, Validators.maxLength(45)]],
      password: [this.partenaire.password, [Validators.required]],
      siteWeb: [this.partenaire.siteWeb, [Validators.maxLength(50)]],
      logo: [this.partenaire.logo, [Validators.maxLength(100)]],
      description: [this.partenaire.description, [Validators.maxLength(250)]]
    })
  }
  
  ngOnInit(): void {
    const id: number = this.getId()
    this.getPartenaireFromService(id)
  }

  getId = () => {
    return this.route.snapshot.params['id'];
  }

  getPartenaireFromService = (id: number) => { 
      const data = this.service.getPartenaire(id).subscribe({ 
        next : (value) => { 
          console.log(value);
            this.partenaire = value 
            this.createForm() 
        },
      })
  }

  public onSubmit = () => { 
    this.submitted = true
    
    if(this.partenaireForm.valid) { 
      const data =  Object.assign(this.partenaire, this.partenaireForm.value)
      this.service.putPartenaire(data).subscribe({
        next: (data: PartenaireInterface) => {
          this.router.navigate(['']); 
        },
        error(err) {
            console.error(err);
        },
      })      
    }
  }

}