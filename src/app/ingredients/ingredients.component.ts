import { Component, OnInit } from '@angular/core';
import { IngredientsInterface } from './models/IngredientsModel';
import { IngredientService } from './services/service.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent  implements OnInit{

  ingredients: IngredientsInterface[] = [] // tableau de Ingredientss

  constructor(private service: IngredientService) { // injection du service
  }

  ngOnInit() { // méthode qui se lance à la creation du composant
    this.getIngredients()
  }
    
  getIngredients = () => { // méthode qui récupère les données du service
    this.service.getIngredients().subscribe({ // souscrit a l'observable
      next: (data: IngredientsInterface[]) => { // dans le cas ou nous récupérons les datas
        this.ingredients = data
      }, 
      error: (err) => { // dans le cas ou l'observable renvoit une erreur
        console.error(err);
      },
      complete: () => { // à la fin de la souscription à l'observable
        console.log("complete");
      }
    })
      
  }

  addIngredients = (data: IngredientsInterface) => { // méthode qui envoie la nouvelle Ingredients au service
    this.service.addIngredient(data).subscribe({ // je souscris a l'observable dans le service
      next: (data: IngredientsInterface) => { // quand je récupère la réponse du service
        this.ingredients.push(data)  // je push dans le tableau la Ingredients provenant du service
      },
      error(err) {
          console.error(err) // si l'observanle me renvoit une erreur, je la log
      }
    })
  }

  delete = (id: number) => {
      this.service.delete(id).subscribe({
        next: () => { // dans le cas ou la requête s'est bien passée
          for (let i =0; i<this.ingredients.length; i++) {  // je parcours le tableau  
            if(this.ingredients[i].id == id) { 
              this.ingredients.splice(i, 1) // suppression de la Ingredients en local
            }
          }
        }
      })
  }


}
