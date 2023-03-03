import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  recipes:Recipe[] = [
    new Recipe("Burger","Burger is made up of 'bun' and 'pototo","https://wallpapercave.com/wp/wp1929458.jpg"),
    new Recipe("Burger","Burger is made up of 'bun' and 'pototo","https://wallpapercave.com/wp/wp1929458.jpg"),
  ];
  
  constructor(){

  }
}
