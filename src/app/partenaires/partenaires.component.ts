import { Component, OnInit } from '@angular/core';
import { PartenaireService } from './services/service.service';
import { PartenaireInterface } from './models/PartenairesModel';


@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.css']
})
export class PartenairesComponent implements OnInit {

  partenaires: PartenaireInterface[] = [] // tableau de partenaires

  constructor(private service: PartenaireService) { } // injection du service

  ngOnInit() { // méthode qui se lance à la creation du composant
    this.getPartenaires();
  }

  getPartenaires = () => { // méthode qui récupère les données du service
    this.service.getPartenaires().subscribe({ // souscrit a l'observable
      next: (data: PartenaireInterface[]) => { // dans le cas ou nous récupérons les datas
        this.partenaires = data
      }, 
      error: (err) => { // dans le cas ou l'observable renvoit une erreur
        console.error(err);
      },
      complete: () => { // à la fin de la souscription à l'observable
        console.log("complete");
      }
    })   
  }

  addPartenaires = (data: PartenaireInterface) => { // méthode qui envoie le nouveau partenaire au service
    this.service.addPartenaire(data).subscribe({ // je souscris a l'observable dans le service
      next: (data: PartenaireInterface) => { // quand je récupère la réponse du service
        this.partenaires.push(data)  // je push dans le tableau le partenaire provenant du service
      },
      error(err) {
          console.error(err) // si l'observanle me renvoit une erreur, je la log
      }
    });
  }

  delete = (id: number) => {
    this.service.deletePartenaire(id).subscribe({
      next: () => { // dans le cas ou la requête s'est bien passée
        for (let i =0; i<this.partenaires.length; i++) {  // je parcours le tableau  
          if(this.partenaires[i].id == id) { 
            this.partenaires.splice(i, 1) // suppression du partenaire en local
          }
        }
      }
    });
  }
}