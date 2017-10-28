import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  private elementRef: ElementRef;
  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
