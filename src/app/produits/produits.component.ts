import { Component, OnInit } from '@angular/core';
import { ProduitsInterface } from './models/ProduitsModel';
import { ProduitService } from './services/service.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent  implements OnInit{

  produits: ProduitsInterface[] = [] // tableau de produits

  constructor(private service: ProduitService) { // injection du service
  }

  ngOnInit() { // méthode qui se lance à la creation du composant
    this.getProduits()
  }
    
  getProduits = () => { // méthode qui récupère les données du service
    this.service.getProduits().subscribe({ // souscrit a l'observable
      next: (data: ProduitsInterface[]) => { // dans le cas ou nous récupérons les datas
        this.produits = data
      }, 
      error: (err) => { // dans le cas ou l'observable renvoit une erreur
        console.error(err);
      },
      complete: () => { // à la fin de la souscription à l'observable
        console.log("complete");
      }
    })   
  }

  addProduit = (data: ProduitsInterface) => { // méthode qui envoie le nouveau produit au service
    this.service.addProduit(data).subscribe({ // je souscris a l'observable dans le service
      next: (data: ProduitsInterface) => { // quand je récupère la réponse du service
        this.produits.push(data)  // je push dans le tableau le produit provenant du service
      },
      error(err) {
          console.error(err) // si l'observanle me renvoit une erreur, je la log
      }
    })
  }

  delete = (id: number) => {
      this.service.delete(id).subscribe({
        next: () => { // dans le cas ou la requête s'est bien passée
          for (let i =0; i<this.produits.length; i++) {  // je parcours le tableau  
            if(this.produits[i].id == id) { 
              this.produits.splice(i, 1) // suppression du produit en local
            }
          }
        }
      })
  }

}
