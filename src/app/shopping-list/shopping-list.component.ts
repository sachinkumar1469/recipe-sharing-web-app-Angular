import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent implements OnInit {

  constructor(private shoppingService:ShoppingService){
    console.log("Object of shopping list services is created")
  }

  ingredients:Ingredients[];

  ngOnInit(){
    this.ingredients = this.shoppingService.getIngredientsList();
    this.shoppingService.ingridentsChanged.subscribe((newArr:Ingredients[])=>{
      this.ingredients = newArr;
    })
  }

  


}
