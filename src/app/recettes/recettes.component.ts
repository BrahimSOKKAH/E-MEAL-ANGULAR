import { Component, OnInit } from '@angular/core';
import { RecettesInterface } from './models/model/RecettesModel';
import { Recetteservice } from './services/service.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  //styleUrls: ['./recettes.component.css']
})
export class RecettesComponent implements OnInit{

  recettes: RecettesInterface[] = [] // tableau de Recettess

  constructor(private service: Recetteservice) { // injection du service
  }

  ngOnInit() { // méthode qui se lance à la creation du composant
    this.getRecettes()
  }
    
  getRecettes = () => { // méthode qui récupère les données du service
    this.service.getRecettes().subscribe({ // souscrit a l'observable
      next: (data: RecettesInterface[]) => { // dans le cas ou nous récupérons les datas
        this.recettes = data
      }, 
      error: (err) => { // dans le cas ou l'observable renvoit une erreur
        console.error(err);
      },
      complete: () => { // à la fin de la souscription à l'observable
        console.log("complete");
      }
    })
      
  }

  addRecettes = (data: RecettesInterface) => { // méthode qui envoie la nouvelle Recettes au service
    this.service.addRecettes(data).subscribe({ // je souscris a l'observable dans le service
      next: (data: RecettesInterface) => { // quand je récupère la réponse du service
        this.recettes.push(data)  // je push dans le tableau la Recettes provenant du service
      },
      error(err) {
          console.error(err) // si l'observanle me renvoit une erreur, je la log
      }
    })
  }

  delete = (id: number) => {
      this.service.delete(id).subscribe({
        next: () => { // dans le cas ou la requête s'est bien passée
          for (let i =0; i<this.recettes.length; i++) {  // je parcours le tableau  
            if(this.recettes[i].id == id) { 
              this.recettes.splice(i, 1) // suppression de la Recettes en local
            }
          }
        }
      })
  }


}
