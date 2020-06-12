import { Directive, HostListener, HostBinding, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {


  constructor(private elRef: ElementRef ,private renderer : Renderer2) { }

  @HostListener('click') onclick(eventData : Event){
      this.renderer.addClass(this.elRef.nativeElement, 'show');
      console.log("hii")
  }

}
