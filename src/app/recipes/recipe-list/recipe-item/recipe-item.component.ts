import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.sass']
})
export class RecipeItemComponent {
  @Input() recipe:{name:string,description:string,imageUrl:string,id:number};
  @Output() currSelectedRecipe = new EventEmitter<any>();

  handleClick(){
    this.currSelectedRecipe.emit();
  }
}
