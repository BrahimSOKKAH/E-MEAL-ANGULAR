import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IngredientsInterface, IngredientsModel } from '../models/IngredientsModel';

@Component({
  selector: 'app-display-ingredients',
  templateUrl: './display-ingredients.component.html',
  styleUrls: ['./display-ingredients.component.css']
})
export class DisplayIgredientComponent {

  @Input() // decorateur permettant de récupérer des données du parent
  data: IngredientsInterface[] = [new IngredientsModel()] // attribut associé au décorateur

  @Output()
  id: EventEmitter<number> = new EventEmitter()

  @Output()
  check: EventEmitter<number> = new EventEmitter()

  delete = (id: number) => {
    this.id.emit(id)
  }
}
