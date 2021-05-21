import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements OnInit {

  @Input() changeValue: number = 0;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.color = this.changeValue < 0 ? 'crimson' : 'forestgreen';
  }
}
