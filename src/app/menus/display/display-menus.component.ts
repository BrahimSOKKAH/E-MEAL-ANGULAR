import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuInterface, MenuModel } from '../models/MenusModel';


@Component({
  selector: 'app-display-menus',
  templateUrl: './display-menus.component.html',
  styleUrls: ['./display-menus.component.css']
})
export class DisplayMenusComponent {
  
  @Input() // decorateur permettant de récupérer des données du parent
data: MenuInterface[] = [new MenuModel()] // attribut associé au décorateur

@Output()
id: EventEmitter<number> = new EventEmitter()

@Output()
check: EventEmitter<number> = new EventEmitter()

delete = (id: number) => {
  this.id.emit(id)
}}