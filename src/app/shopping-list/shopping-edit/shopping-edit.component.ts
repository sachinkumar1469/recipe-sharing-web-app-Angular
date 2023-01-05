import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.sass']
})
export class ShoppingEditComponent {

  @ViewChild('name') nameEl:ElementRef;
  @ViewChild('amount') amountEl:ElementRef; 

  @Output() addIngridents:EventEmitter<any> = new EventEmitter<any>();

  onAdd(){
    this.addIngridents.emit({name:this.nameEl.nativeElement.value,amount:this.amountEl.nativeElement.value});
  }

  

}
