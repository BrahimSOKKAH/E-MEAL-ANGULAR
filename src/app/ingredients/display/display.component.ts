import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IngredientsInterface, IngredientsModel } from '../models/IngredientsModel';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

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
