import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  isRecipe:boolean = true;

  toggleRecipe(toSet:boolean){
    console.log(toSet);
    this.isRecipe = toSet;
  }
}
