import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecettesInterface, RecettesModel } from '../models/model/RecettesModel';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  @Input() // decorateur permettant de récupérer des données du parent
  data: RecettesInterface[] = [new RecettesModel()] // attribut associé au décorateur

  @Output()
  id: EventEmitter<number> = new EventEmitter()

  @Output()
  check: EventEmitter<number> = new EventEmitter()

  delete = (id: number) => {
    this.id.emit(id)
  }
}
