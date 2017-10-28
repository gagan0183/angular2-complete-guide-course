import { Directive, ElementRef, HostListener, HostBinding, Input, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  private elementRef: ElementRef;
  private backgroundColor;
  @Input() defaultColor;
  @Input() highlightColor;
  constructor(elementRef: ElementRef, private renderer: Renderer) {
    this.elementRef = elementRef;
    //this.elementRef.nativeElement.style.backgroundColor = 'green';
    //this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
