import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.sass']
})
export class ShoppingEditComponent {

  constructor(private shoppingService:ShoppingService){}

  @ViewChild('name') nameEl:ElementRef;
  @ViewChild('amount') amountEl:ElementRef; 

  onAdd(){
    this.shoppingService.addIngredient(new Ingredients(this.nameEl.nativeElement.value,this.amountEl.nativeElement.value));
  }
}
