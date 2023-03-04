import { Component, OnInit } from '@angular/core';

import Ingredient from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers:[]
})
export class ShoppingListComponent implements OnInit {

  constructor(private shoppingListService:ShoppingListService){}

  ingredients:Ingredient[];

  onIngridentAdded(e:{name:string,amount:number}){
    this.shoppingListService.onAddNewIngrident(e);
    this.ingredients = this.shoppingListService.getIngridents();
  }

  ngOnInit(): void {
      this.ingredients = this.shoppingListService.getIngridents();

  }
}
