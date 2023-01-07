import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {


  private recipeList:Recipe[] = [
    new Recipe('Tomato Soup','A test','https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg',1,[new Ingredients('panner',1),new Ingredients('curd',1)]),
    new Recipe('Egg Curry','A test','https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg',2,[new Ingredients('panner',1),new Ingredients('curd',1)]),
    new Recipe('Butter Panner Masala','A test','https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg',3,[new Ingredients('panner',1),new Ingredients('curd',1)]),
  ]

  constructor() { }

  getRecipe(){
    return this.recipeList.slice();
  }

  getRecipeById(id:number){
    return this.recipeList.find(recipe=>recipe.id == id);
  }

  selectedRecipe:EventEmitter<Recipe> = new EventEmitter<Recipe>();

}
