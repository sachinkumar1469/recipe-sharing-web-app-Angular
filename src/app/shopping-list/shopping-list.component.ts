import { Component, OnDestroy, OnInit } from '@angular/core';

import Ingredient from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers:[]
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  constructor(private shoppingListService:ShoppingListService){}

  ingredients:Ingredient[];

  onIngridentAdded(e:{name:string,amount:number}){
    this.shoppingListService.onAddNewIngrident(e);
  }

  ngOnInit(): void {
      this.ingredients = this.shoppingListService.getIngridents();
      this.shoppingListService.listChanged.subscribe(newList=>{
        console.log("Subscribed Called");
        this.ingredients = newList;
      });
  }

  ngOnDestroy(): void {
      this.shoppingListService.listChanged.unsubscribe();
  }
}
