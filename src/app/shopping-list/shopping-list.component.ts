import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent {
  ingredients:Ingredients[] = [
    new Ingredients('Apples',5),
    new Ingredients('tomato',5),
  ];

  addIngridents(arg){
    console.log(arg);
    this.ingredients.push(new Ingredients(arg.name,arg.amount));
  }
}
