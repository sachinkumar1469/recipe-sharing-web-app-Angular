import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {

  @ViewChild("nameInput") nameElRef:ElementRef;
  @ViewChild("amountInput") amountElRef:ElementRef;

  @Output() ingridentAdded = new EventEmitter<{name:string,amount:number}>();

  onAddItem(nameEl:HTMLInputElement,amountEl:HTMLInputElement){
    // console.log(this.nameElRef.nativeElement.value,this.amountElRef.nativeElement.value);
    this.ingridentAdded.emit({
      name:this.nameElRef.nativeElement.value,
      amount:this.amountElRef.nativeElement.value
    });
  }
}
