import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";


@Directive({
    selector:"[appDropdown]"
})
export class DropdownDirective{

    constructor(private elRef:ElementRef){}

    @HostBinding("class.open") isOpen:Boolean;

    @HostListener("document:click",["$event"]) onToggleDropdown(e:Event){
        // console.log(this.elRef.nativeElement);
        this.isOpen = this.elRef.nativeElement.contains(e.target)?!this.isOpen:false;
        // this.isOpen = !this.isOpen;
    }

}