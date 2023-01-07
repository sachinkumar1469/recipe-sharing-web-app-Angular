import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  
  ingridentsChanged:EventEmitter<Ingredients[]> = new EventEmitter<Ingredients[]>();
  private ingredients:Ingredients[] = [
    new Ingredients('Apples',5),
    new Ingredients('tomato',5),
    new Ingredients('tomato',5),
  ];

  addIngredient(...args){
    console.log("this called")
    console.log(args);
    args.forEach(newIng=>{
      newIng.forEach(newIngr=>{
        this.ingredients.push(newIngr);

      })
    })
    console.log(this.ingredients);
    this.ingridentsChanged.emit(this.ingredients.slice());
  }

  getIngredientsList(){
    
    // Return the copy of array not the original so whenever the original array changes you need to tell the components that orgiginal array is changed
    return this.ingredients.slice();
  }


  constructor() { }
}
