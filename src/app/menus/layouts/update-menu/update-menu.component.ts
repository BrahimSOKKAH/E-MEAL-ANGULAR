import { Component, OnInit } from '@angular/core';
import { MenuInterface, MenuModel } from '../../models/MenusModel';
import { FormBuilder, Validators } from '@angular/forms';
import { MenuService } from '../../services/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent implements OnInit {

  menu: MenuInterface = new MenuModel()
  menuForm: any;

  public submitted: boolean = false
  
  constructor(private route: ActivatedRoute, private service: MenuService, private fb: FormBuilder, private router: Router) {
    this.createForm() // je crée le formulaire à vide à la création du composant
  }
  
  createForm = () => {
    this.menuForm = this.fb.group({ 
      nom :[this.menu.nom, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      descriptionMenu: [this.menu.descriptionMenu, [Validators.required, Validators.minLength(2), Validators.maxLength(250)]],
      dateDebut: [this.menu.dateDebut, Validators.required],
      dateFin: [this.menu.dateFin, Validators.required],
    })
  }
  
    ngOnInit(): void {
      const id: number = this.getId()
      this.getMenuFromService(id)
  }

  getId = () => {
    return this.route.snapshot.params['id'];
  }

  getMenuFromService = (id: number) => { // méthode pour récupérer le Menu à modifier
      const data = this.service.getMenusById(id).subscribe({ // je souscris à l'observable dans le service
        next : (value) => { // quand je récupère la data du service
          console.log(value);
            this.menu = value // j'affecte cette valeur à l'attribut menu
            this.createForm() // je met à jour le formulaire avec les datas provenant du service
        },
      })
  }

  public onSubmit = () => { 
    this.submitted = true
    
    if(this.menuForm.valid) { 
      const data =  Object.assign(this.menu, this.menuForm.value)
      this.service.putMenu(data).subscribe({
        next: (data: MenuInterface) => {
          this.router.navigate(['']); 
        },
        error(err) {
            console.error(err);
        },
      })      
    }
  }

}