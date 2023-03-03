import { Component, ElementRef, EventEmitter, Output } from "@angular/core";


@Component({
    selector:"app-header",
    templateUrl:"./header.component.html",
    styleUrls:["./header.component.scss"]
})
export default class HeaderComponent{
    currentActive:string = "recipes";

    @Output() currentActiveEmit = new EventEmitter<string>();
    onChangeNav(currentActive:string){
        this.currentActive = currentActive;
        this.currentActiveEmit.emit(this.currentActive);
    }
}