import {Component, EventEmitter, Input, Output} from '@angular/core'



@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.sass']
})
export class Header{

    @Output() toggleRecipeEvent = new EventEmitter<any>();

    toggle(selected:string){
        if(selected == 'recipe'){
            this.toggleRecipeEvent.emit(true);
        } else {
            this.toggleRecipeEvent.emit(false);
        }
    }

}