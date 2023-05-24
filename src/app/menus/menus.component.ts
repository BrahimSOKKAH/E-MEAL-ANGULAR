import { Component, OnInit } from '@angular/core';
import { MenuInterface } from './models/MenusModel';
import { MenuService } from './services/service.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent  implements OnInit{

  menus: MenuInterface[] = [] // tableau de Menus

  constructor(private service: MenuService) { // injection du service
  }

  ngOnInit() { // méthode qui se lance à la creation du composant
    this.getMenus()
  }
    
  getMenus = () => { // méthode qui récupère les données du service
    this.service.getMenus().subscribe({ // souscrit a l'observable
      next: (data: MenuInterface[]) => { // dans le cas ou nous récupérons les datas
        this.menus = data
      }, 
      error: (err) => { // dans le cas ou l'observable renvoit une erreur
        console.error(err);
      },
      complete: () => { // à la fin de la souscription à l'observable
        console.log("complete");
      }
    })   
  }

  addMenu = (data: MenuInterface) => { // méthode qui envoie le nouveau Menu au service
    this.service.addMenu(data).subscribe({ // je souscris a l'observable dans le service
      next: (data: MenuInterface) => { // quand je récupère la réponse du service
        this.menus.push(data)  // je push dans le tableau le Menu provenant du service
      },
      error(err) {
          console.error(err) // si l'observanle me renvoit une erreur, je la log
      }
    })
  }

  delete = (id: number) => {
      this.service.delete(id).subscribe({
        next: () => { // dans le cas ou la requête s'est bien passée
          for (let i =0; i<this.menus.length; i++) {  // je parcours le tableau  
            if(this.menus[i].id == id) { 
              this.menus.splice(i, 1) // suppression du Menu en local
            }
          }
        }
      })
  }
}