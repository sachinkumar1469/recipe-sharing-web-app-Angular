import { Component } from '@angular/core';

import Ingredient from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
  ingredients:Ingredient[]=[
    new Ingredient("Apple",5),
    new Ingredient("Tomatos",10)
  ];
  onIngridentAdded(e:{name:string,amount:number}){
    this.ingredients.push(e);
  }
  constructor(){}
}
