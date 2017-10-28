import { Directive, ElementRef, HostListener, HostBinding, Renderer } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  private elementRef: ElementRef;
  private backgroundColor = 'purple';
  constructor(elementRef: ElementRef, private renderer: Renderer) {
    this.elementRef = elementRef;
    //this.elementRef.nativeElement.style.backgroundColor = 'green';
    //this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = 'green';
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = 'blue';
  }

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }
}
