import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  toShow:string = "recipes";
  onCurrentActiveChange(event:string){
    this.toShow = event;
  }
}
