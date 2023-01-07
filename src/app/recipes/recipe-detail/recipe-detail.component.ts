import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.sass']
})
export class RecipeDetailComponent implements OnInit {

  currSelectedRecipe:Recipe;
  
  constructor(private recipeService:RecipesService,private shoppingSer:ShoppingService,private router:ActivatedRoute){}

  ngOnInit(): void {
      
      this.router.params.subscribe(paramsData=>{
        const recipeId = paramsData.recipeId;
        this.currSelectedRecipe = this.recipeService.getRecipeById(+recipeId);
      })
      
  }


  addIngrientsToList(){
    console.log(this.currSelectedRecipe.ingridents);
    
    this.shoppingSer.addIngredient(this.currSelectedRecipe.ingridents);
  }

}
