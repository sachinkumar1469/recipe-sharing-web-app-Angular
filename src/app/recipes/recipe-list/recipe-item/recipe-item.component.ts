import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.sass']
})
export class RecipeItemComponent {
  @Input() recipe:{name:string,description:string,imageUrl:string,id:number,ingridents:Ingredients[]};

  constructor(private recipeService:RecipesService){}

  handleClick(){
    this.recipeService.selectedRecipe.emit(this.recipe);
  }
}
