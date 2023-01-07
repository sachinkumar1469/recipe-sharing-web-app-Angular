import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {

  recipeList:Recipe[];



  constructor(private recipeService:RecipesService){

  }

  ngOnInit(): void {
      this.recipeList = this.recipeService.getRecipe();
  }
  
}
