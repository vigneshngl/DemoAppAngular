import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input()
  bgColor: string

  @Input()
  textColor: string

  constructor(private elementRef? : ElementRef) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.elementRef.nativeElement.style.fontWeight = 'bold';
    this.elementRef.nativeElement.style.color = this.textColor;
    this.elementRef.nativeElement.style.backgroundColor = this.bgColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elementRef.nativeElement.style.fontWeight = 'normal';
    this.elementRef.nativeElement.style.color = "black";
    this.elementRef.nativeElement.style.backgroundColor = "white";
  }
  
}
