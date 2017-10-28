import { Directive, ElementRef, HostListener, HostBinding, Renderer } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  private elementRef: ElementRef;
  constructor(elementRef: ElementRef, private renderer: Renderer) {
    this.elementRef = elementRef;
    //this.elementRef.nativeElement.style.backgroundColor = 'green';
    //this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }


  @HostListener('mouseenter') mouseover() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

  @HostListener('mouseleave') mouseleave() {
    this.elementRef.nativeElement.style.backgroundColor = 'white';
  }
}
