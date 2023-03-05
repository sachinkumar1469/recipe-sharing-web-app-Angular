import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit, OnChanges, DoCheck {
  constructor(
    private recipeService:RecipeService,
    private shoppingListService:ShoppingListService,
    private activeRoute:ActivatedRoute
  ){}

  recipeId:any;

  selectedRecipe:Recipe = null;

  ngOnInit(): void {
    this.recipeId = this.activeRoute.snapshot.params.recipeId;
      this.selectedRecipe = this.recipeService.getRecipe().find(recipe=>{
        return recipe.id == this.recipeId;
      });

      this.activeRoute.params.subscribe((params:Params)=>{
        // console.log("params",params);
        this.recipeId = params.recipeId;
      })
  }

  ngOnChanges(changes: SimpleChanges): void {
      // console.log("Changes",changes);
      // this.selectedRecipe = this.recipeService.getRecipe().find(recipe=>{
      //   return recipe.id == this.recipeId;
      // })
  }

  ngDoCheck(): void {
    this.selectedRecipe = this.recipeService.getRecipe().find(recipe=>{
      return recipe.id == this.recipeId;
    })
  }

  onAddIngridents(){
    this.shoppingListService.onAddNewIngrident(...this.selectedRecipe.ingridents);
  }
}
