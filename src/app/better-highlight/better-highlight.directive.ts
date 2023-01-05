import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor:string;

  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {
      // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','green')
  }

  @HostListener('mouseenter') mouseHover(event:Event){
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','green')
    this.backgroundColor = "green"
  }
  
  @HostListener('mouseout') mouseHoverr(event:Event){
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent')
    this.backgroundColor = "transparent"
  }




}
