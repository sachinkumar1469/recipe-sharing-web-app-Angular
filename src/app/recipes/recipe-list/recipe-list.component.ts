import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent {

  recipeList:Recipe[] = [
    new Recipe('Tomato Soup','A test','https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg',1),
    new Recipe('Egg Curry','A test','https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg',2),
    new Recipe('Butter Panner Masala','A test','https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg',3),
  ]


  @Output() recipeWasSelected = new EventEmitter<any>()

  constructor(){

  }

  handleRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe)
  }

}
