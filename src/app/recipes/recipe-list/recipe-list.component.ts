import { Component, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {

  @Input() recipes:Recipe[];

  constructor(private router:Router,private route:ActivatedRoute){

  }

  onNavigateToShop(){
    this.router.navigate(["/","shopping"]);
  }

  onRelativeNavigateToShop(){
    this.router.navigate(["shopping"],{relativeTo:this.route})
  }
}
