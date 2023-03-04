import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  constructor(private recipeService:RecipeService){}

  selectedRecipe:Recipe = null;

  ngOnInit(): void {
      this.recipeService.recipeSelected.subscribe((recipe)=>{
        this.selectedRecipe = recipe;
      })
  }
}
