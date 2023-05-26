import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PartenaireInterface, PartenaireModel } from 'src/app/partenaires/models/PartenairesModel';
import { ProduitsInterface, ProduitsModel } from '../models/ProduitsModel';


@Component({
  selector: 'app-display-produits',
  templateUrl: './display-produits.component.html',
  styleUrls: ['./display-produits.component.css']
})
export class DisplayProduitsComponent { 
  
  @Input() // decorateur permettant de récupérer des données du parent
data: ProduitsInterface[] = [new ProduitsModel()] // attribut associé au décorateur

@Output()
id: EventEmitter<number> = new EventEmitter()

@Output()
check: EventEmitter<number> = new EventEmitter()

delete = (id: number) => {
  this.id.emit(id)
}}
