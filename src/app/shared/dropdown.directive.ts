import { Directive, HostBinding, HostListener } from "@angular/core";


@Directive({
    selector:"[appDropdown]"
})
export class DropdownDirective{

    
    @HostBinding("class.open") isOpen:Boolean;

    @HostListener("click") onToggleDropdown($event){
        this.isOpen = !this.isOpen;
    }

}